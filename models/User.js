const pool = require('../db/connexion');
const { findById } = require('./Produit');

const User = {
    create: async (nom, email, motDePasse) => {
        const [result] = await pool.query(
            'INSERT INTO users (nom, email, mot_de_passe) VALUES (?, ?, ?)',
            [nom, email, motDePasse]
        )
        return result.insertId;
    },

    findByEmail: async (email) => {
        const [rows] = await pool.query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        )
        return rows[0];
    },

    findById: async (id) => {
        const [rows] = await pool.query(
            'SELECT id, nom, email, role, created_at FROM users WHERE id = ?',
            [id]
        )
        return rows[0];
    }
};

module.exports = User;