#!/bin/bash
# ============================================
# ClimAltera — Script de déploiement VPS OVH
# Usage : ssh root@137.74.115.181 'bash -s' < deploy.sh
#    ou : ./deploy.sh (si exécuté directement sur le VPS)
# ============================================

set -e

APP_NAME="climaltera"
APP_DIR="/home/ubuntu/$APP_NAME"
REPO_URL="git@github.com:dioprawane/climaltera.git"  # ← À remplacer
DOMAIN="climaltera.com"
NGINX_CONF="/etc/nginx/sites-available/$DOMAIN"

echo "🚀 Déploiement de $APP_NAME..."

# --- 1. Cloner ou mettre à jour le repo ---
if [ -d "$APP_DIR" ]; then
    echo "📦 Mise à jour du repo..."
    cd "$APP_DIR"
    git pull origin main
else
    echo "📦 Clonage du repo..."
    git clone "$REPO_URL" "$APP_DIR"
    cd "$APP_DIR"
fi

# --- 2. Build et lancement Docker ---
echo "🐳 Build Docker production..."
docker compose -f docker-compose.production.yml build --no-cache

echo "🐳 Redémarrage du conteneur..."
docker compose -f docker-compose.production.yml down 2>/dev/null || true
docker compose -f docker-compose.production.yml up -d

# --- 3. Attendre que le conteneur soit healthy ---
echo "⏳ Vérification santé du conteneur..."
for i in $(seq 1 30); do
    if curl -sf http://localhost:3400/ > /dev/null 2>&1; then
        echo "✅ ClimAltera est en ligne sur le port 3400"
        break
    fi
    if [ $i -eq 30 ]; then
        echo "❌ Timeout — le conteneur ne répond pas"
        docker compose -f docker-compose.production.yml logs --tail=50
        exit 1
    fi
    sleep 2
done

# --- 4. Config Nginx (seulement au premier déploiement) ---
if [ ! -f "$NGINX_CONF" ]; then
    echo "🌐 Installation de la config Nginx..."
    sudo cp "$APP_DIR/nginx/$DOMAIN.conf" "$NGINX_CONF"
    sudo ln -sf "$NGINX_CONF" "/etc/nginx/sites-enabled/$DOMAIN"

    # Tester la config avant de recharger
    sudo nginx -t

    # D'abord, config HTTP uniquement pour Certbot
    # On remplace temporairement la config pour ne garder que le bloc :80
    sudo tee "$NGINX_CONF" > /dev/null << 'TMPCONF'
server {
    listen 80;
    listen [::]:80;
    server_name climaltera.com www.climaltera.com;

    location / {
        proxy_pass http://127.0.0.1:3400;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
TMPCONF

    sudo nginx -t && sudo systemctl reload nginx

    # --- 5. SSL avec Certbot ---
    echo "🔒 Obtention du certificat SSL..."
    sudo certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos --email contact@climaltera.com

    # Remettre la config complète
    sudo cp "$APP_DIR/nginx/$DOMAIN.conf" "$NGINX_CONF"
    sudo nginx -t && sudo systemctl reload nginx

    echo "🔒 SSL activé !"
else
    echo "🌐 Config Nginx déjà en place, rechargement..."
    sudo cp "$APP_DIR/nginx/$DOMAIN.conf" "$NGINX_CONF"
    sudo nginx -t && sudo systemctl reload nginx
fi

echo ""
echo "============================================"
echo "✅ $APP_NAME déployé avec succès !"
echo "   → https://$DOMAIN"
echo "============================================"
