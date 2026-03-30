const { create } = require('domain');
const Produit = require('../models/Produit');

const produitController = {
  getAll: async (req, res) => {
    try {
      const produits = await Produit.findAll();
      res.json(produits);
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const produit = await Produit.findById(req.params.id);
      if (!produit) return res.status(404).json({ message: 'Produit non trouvé' })
      res.json(produit);
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const produit = await Produit.create(req.body);
      res.status(201).json(produit);
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const produit = await Produit.update(req.params.id, req.body);
      res.json(produit);
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      await Produit.delete(req.params.id);
      res.json(produit);
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
  }
};

module.exports = produitController;