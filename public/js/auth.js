function basculerFormulaire() {
  const connexion = document.getElementById('section-connexion')
  const inscription = document.getElementById('section-inscription')

  if (connexion.style.display === 'none') {
    connexion.style.display = 'block'
    inscription.style.display = 'none'
  } else {
    connexion.style.display = 'none'
    inscription.style.display = 'block'
  }
}

async function seConnecter() {
  const email = document.getElementById('email-connexion').value
  const password = document.getElementById('password-connexion').value
  const erreur = document.getElementById('erreur-connexion')

  const response = await fetch('http://localhost:3000/auth/connexion', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, mot_de_passe: password })
  })

  const data = await response.json()

  if (!response.ok) {
    erreur.textContent = data.message
    return
  }

  localStorage.setItem('token', data.token)
  localStorage.setItem('user', JSON.stringify({ nom: data.nom, role: data.role }))

  window.location.href = 'profil.html'
}

async function sInscrire() {
  const nom = document.getElementById('nom-inscription').value
  const email = document.getElementById('email-inscription').value
  const password = document.getElementById('password-inscription').value
  const erreur = document.getElementById('erreur-inscription')

  const response = await fetch('http://localhost:3000/auth/inscription', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nom, email, mot_de_passe: password })
  })

  const data = await response.json()

  if (!response.ok) {
    erreur.textContent = data.message
    return
  }

  alert('Compte créé ! Connecte-toi maintenant.')
  basculerFormulaire()
}