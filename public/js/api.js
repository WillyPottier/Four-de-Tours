const API_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:3000'
  : 'https://production-domaine.com'

//Requête front pour les produits
async function getProduits() {
  const response = await fetch(`${API_URL}/produits`)
  return await response.json()
};

//Requête front pour la connexion
async function getConnexion(email, mot_de_passe) {
  const response = await fetch(`${API_URL}/auth/connexion`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, mot_de_passe})
  })

  return await response.json()
};

//Requête front pour l'inscription
async function getInscription(nom, email, mot_de_passe) {
  const response = await fetch(`${API_URL}/auth/inscription`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nom, email, mot_de_passe})
  })

  return await response.json()
};

//Requête front pour le profil(token)
async function getProfil() {
  const token = localStorage.getItem('token')

  const response = await fetch(`${API_URL}/auth/profil`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  return await response.json()
};