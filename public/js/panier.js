let panier = JSON.parse(localStorage.getItem('panier')) || []

function ajouterAuPanier(produit) {
  const produitExistant = panier.find(p => p.id === produit.id)

  if (produitExistant) {
    produitExistant.quantite += 1
  } else {
    panier.push({ ...produit, quantite: 1 })
  }

  localStorage.setItem('panier', JSON.stringify(panier))
  afficherPanier()
}

function afficherPanier() {
  const container = document.getElementById('panier-container')
  
  if (panier.length === 0) {
    container.innerHTML = '<p>Votre panier est vide</p>'
    return
  }

  let total = 0
  container.innerHTML = panier.map(p => {
    total += p.prix * p.quantite
    return `
      <div class="panier-item">
        <span>${p.nom}</span>
        <span>x${p.quantite}</span>
        <span>${(p.prix * p.quantite).toFixed(2)} €</span>
      </div>
    `
  }).join('')

  container.innerHTML += `<div class="panier-total">Total : ${total.toFixed(2)} €</div>`
}