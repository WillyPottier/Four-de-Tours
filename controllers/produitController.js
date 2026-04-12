const Produit = require('../models/Produit');

const produitController = {
  getAll: async (req, res, next) => {
    try {
      const produits = await Produit.findAll();
      res.json(produits);
    } catch (error) {
      next(error);
    }
  },

  getOne: async (req, res, next) => {
    try {
      const produit = await Produit.findById(req.params.id);
      if (!produit) return res.status(404).json({ message: 'Produit non trouvé' })
      res.json(produit);
    } catch (error) {
      next(error);
    }
  },

  create: async (req, res, next) => {
    try {
      const produit = await Produit.create(req.body);
      res.status(201).json(produit);
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const produit = await Produit.update(req.params.id, req.body);
      res.json(produit);
    } catch (error) {
      next(error);
    }
  },

  delete: async (req, res, next) => {
    try {
      await Produit.delete(req.params.id);
      res.json({ message: 'Produit supprimé' });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = produitController;