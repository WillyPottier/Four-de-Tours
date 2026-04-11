const prisma = require('../db/connexion');

const Produit = {
    findAll: async () => {
        return await prisma.produit.findMany();
    },

    findById: async (id) => {
        return await prisma.produit.findUnique({
            where: { id: parseInt(id) }
        });
    },

    create: async (data) => {
        return await prisma.produit.create({
            data: {
                nom: data.nom,
                description: data.description,
                prix: data.prix,
                image: data.image,
                disponible: data.disponible ?? true
            }
        });
    },

    update: async (id, data) => {
        return await prisma.produit.update({
            where: { id: parseInt(id) },
            data
        });
    },

    delete: async (id) => {
        return await prisma.produit.delete({
            where: { id: parseInt(id) }
        });
    }
};

module.exports = Produit;