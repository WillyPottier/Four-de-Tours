// const mysql = require('mysql2/promise');
// require('dotenv').config();

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
// });

// module.exports = pool;

// db/connexion.js
// const { PrismaClient } = require('@prisma/client');

// const prisma = new PrismaClient();

// module.exports = prisma;

require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const { PrismaClient } = require('@prisma/client');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');

const adapter = new PrismaMariaDb({
    host:            process.env.DB_HOST,
    user:            process.env.DB_USER,
    password:        process.env.DB_PASSWORD,
    database:        process.env.DB_NAME,
    connectionLimit: 5,
});

const prisma = new PrismaClient({ adapter });

module.exports = prisma;