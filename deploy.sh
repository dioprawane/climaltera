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
    if curl -sf http://localhost:3600/ > /dev/null 2>&1; then
        echo "✅ ClimAltera est en ligne sur le port 3600"
        break
    fi
    if [ $i -eq 30 ]; then
        echo "❌ Timeout — le conteneur ne répond pas"
        docker compose -f docker-compose.production.yml logs --tail=50
        exit 1
    fi
    sleep 2
done

# --- 4. Config Nginx (SSL + certificat déjà en place) ---
echo "🌐 Mise à jour de la config Nginx..."
sudo cp "$APP_DIR/nginx/$DOMAIN.conf" "$NGINX_CONF"
sudo ln -sf "$NGINX_CONF" "/etc/nginx/sites-enabled/$DOMAIN"
sudo nginx -t && sudo systemctl reload nginx
echo "✅ Nginx rechargé"

echo ""
echo "============================================"
echo "✅ $APP_NAME déployé avec succès !"
echo "   → https://$DOMAIN"
echo "============================================"
