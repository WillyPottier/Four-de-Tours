// models/User.js
const prisma = require('../db/connexion');

const User = {
    create: async (nom, email, motDePasse) => {
        const user = await prisma.user.create({
            data: {
                nom,
                email,
                motDePasse
            }
        });
        return user.id;
    },

    findByEmail: async (email) => {
        return await prisma.user.findUnique({
            where: { email }
        });
    },

    findById: async (id) => {
        return await prisma.user.findUnique({
            where: { id: parseInt(id) },
            select: {
                id:        true,
                nom:       true,
                email:     true,
                role:      true,
                createdAt: true
            }
        });
    }
};

module.exports = User;