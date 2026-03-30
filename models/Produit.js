const prisma = require('../db/connexion');

const Produit = {
    findAll: async () => {
        return await prisma.produit.findMany();
    },

    findById: async (id) => {
        return await prisma.produit.findUnique({
            where: { id: parseInt(id) }
        });
    }
};

module.exports = Produit;