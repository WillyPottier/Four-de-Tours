const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commandeController');
const auth = require('../middlewares/auth');

//Routes client (auth obligatoire)
router.post('/', auth, commandeController.create);

module.exports = router;