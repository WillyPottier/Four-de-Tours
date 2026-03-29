const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');

router.get('/profil', auth, authController.profil);

router.post('/inscription', authController.inscription);
router.post('/connexion', authController.connexion);

module.exports = router;