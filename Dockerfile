# Dockerfile pour le développement SvelteKit
FROM node:24-alpine

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY . .

# Exposer le port de développement
EXPOSE 5173

# Commande par défaut : lancer le serveur de dev
CMD ["npm", "run", "dev", "--", "--host"]
