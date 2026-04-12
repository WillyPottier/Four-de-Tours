const Commande = require('../models/Commande')

const commandeController = {
    create: async (req, res, next) => {
        try {
            const { modeLivraison, total, adresseLivraison, lignes } = req.body;
            const userId = req.user.id;

            const commande = await Commande.create(userId, modeLivraison, total, adresseLivraison, lignes);
            res.status(201).json(commande)

        } catch (error) {
            next(error);
        }
    }
};

module.exports = commandeController;