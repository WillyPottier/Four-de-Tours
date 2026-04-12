# Four de Tours 🥐

Application e-commerce pour une boulangerie, développée en Vanilla JS / Node.js / Express.

> Projet d'apprentissage visant à maîtriser une architecture backend professionnelle avant de passer à des frameworks plus haut niveau.

---

## Stack technique

**Backend**
- Node.js / Express
- Prisma 7.6.0 avec `@prisma/adapter-mariadb`
- MySQL (Docker Compose)
- bcrypt (hashage des mots de passe)
- jsonwebtoken (authentification JWT)

**Frontend**
- Vanilla JS
- Fetch API
- localStorage (panier & session)

**Outils**
- Docker Compose (MySQL + phpMyAdmin)
- nodemon
- dotenv
- Thunder Client (tests API)

---

## Prérequis

- Node.js
- Docker Desktop

---

## Installation

```bash
git clone https://github.com/WillyPottier/four-de-tours.git
cd four-de-tours
npm install
```

Copier le fichier d'environnement :

```bash
cp .env.example .env.development
```

Renseigner les variables dans `.env.development` :

```
DATABASE_URL=mysql://root:password@localhost:3306/four_de_tours
JWT_SECRET=ton_secret
PORT=3000
```

---

## Lancer le projet

Démarrer la base de données :

```bash
docker compose up -d
```

Appliquer les migrations Prisma :

```bash
npx prisma migrate dev
```

Lancer le serveur en développement :

```bash
npm run dev
```

---

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur en mode développement |
| `npm start` | Lance le serveur en mode production |

---

## Architecture

```
four-de-tours/
├── controllers/        # Logique métier (MVC)
├── middlewares/        # Auth, isAdmin, errorHandler
├── models/             # Accès base de données via Prisma
├── prisma/             # Schéma et migrations
├── public/             # Frontend (HTML, CSS, JS)
│   └── js/
│       ├── api.js      # Couche fetch
│       ├── app.js      # Point d'entrée frontend
│       ├── panier.js   # Gestion du panier (localStorage)
│       ├── produits.js # Affichage des produits
│       ├── auth.js     # Connexion / inscription
│       └── profil.js   # Page profil utilisateur
├── routes/             # Définition des routes Express
├── .env.example        # Template des variables d'environnement
└── docker-compose.yml
```

---

## Fonctionnalités

- Affichage des produits
- Panier (localStorage) avec gestion des quantités
- Inscription / Connexion (JWT)
- Page profil utilisateur (protégée)
- Routes admin protégées (auth + rôle)
- Gestion des commandes (en cours)