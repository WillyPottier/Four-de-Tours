const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authController = {
    inscription: async (req, res) => {
        try {
            const { nom, email, mot_de_passe } = req.body;

            const userExistant = await User.findByEmail(email)
            if (userExistant) {
                return res.status(400).json({ message: 'Email déjà utilisé' })
            }

            const hash = await bcrypt.hash(mot_de_passe, 10)
            const id = await User.create(nom, email, hash)

            res.status(201).json({ message: 'Compte créé', id })
        } catch (error) {
            res.status(500).json({ message: 'Erreur serveur', error: error.message })
        }
    },

    connexion: async (req, res) => {
        try {
            const { email, mot_de_passe } = req.body;

            const user = await User.findByEmail(email)
            if (!user) {
                return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
            }

            const motDePasseValide = await bcrypt.compare(mot_de_passe, user.motDePasse)
            if (!motDePasseValide) {
                return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
            }

            const token = jwt.sign(
                { id: user.id, email: user.email, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            )

            res.json({ token, nom: user.nom, role: user.role });
        } catch (error) {
            res.status(500).json({ message: 'Erreur serveur', error: error.message });
        }
    },

    profil: async (req, res) => {
        try {
            const user = await User.findById(req.user.id)
            if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' })
            res.json(user)
        } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message })
        }
    }
};

module.exports = authController;