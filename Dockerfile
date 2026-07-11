# Utilisation d'une image légère de Node.js
FROM node:20-slim

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers de configuration pour installer les dépendances
# Assure-toi d'avoir un package.json
COPY package*.json ./

# Installer les dépendances (si tu utilises des modules npm)
RUN npm install

# Copier le reste du code source (data.js, index.js, etc.)
COPY . .

# Exposer le port si ton application a une interface web (ex: 3000)
EXPOSE 3000

# Commande pour lancer ton application
CMD ["node", "server.js"]