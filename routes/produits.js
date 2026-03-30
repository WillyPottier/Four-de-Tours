const express = require('express');
const router = express.Router();
const produitController = require('../controllers/produitController');
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');

// Routes publiques
router.get('/', produitController.getAll);
router.get('/:id', produitController.getOne);

// Routes admin (auth + isAdmin en chaîne)
router.post('/', auth, isAdmin, produitController.create);
router.put('/:id', auth, isAdmin, produitController.update);
router.delete('/:id', auth, isAdmin, produitController.delete);

module.exports = router;