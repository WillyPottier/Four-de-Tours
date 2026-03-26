const pool = require('../db/connexion');

const Produit = {
    findAll: async () => {
        const [rows] = await pool.query('SELECT * FROM produits');
        return rows;
    },

    findById: async (id) => {
        const [rows] = await pool.query('SELECT * FROM produits WHERE id = ?', [id]);
        return rows[0];
    }
};

module.exports = Produit;