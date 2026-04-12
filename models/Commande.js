const prisma = require('../db/connexion');

const Commande = {
    create: async (userId, modeLivraison, total, adresseLivraison, lignes) => {
        return await prisma.commande.create({
            data: {
                userId,
                modeLivraison,
                total,
                adresseLivraison,
                lignesCommande: {
                    create: lignes.map(ligne => ({
                        produitId: ligne.produitId,
                        quantite: ligne.quantite,
                        prixUnitaire: ligne.prixUnitaire
                    }))
                }
            }
        })
    }
};

module.exports = Commande;