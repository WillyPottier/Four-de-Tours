let panier = JSON.parse(localStorage.getItem('panier')) || [];

function ajouterAuPanier(id) {
  const produit = produits.find(p => p.id === id)
  const produitExistant = panier.find(p => p.id === id)

  if (produitExistant) {
    produitExistant.quantite += 1
  } else {
    panier.push({ ...produit, quantite: 1 })
  }

  localStorage.setItem('panier', JSON.stringify(panier))
  afficherPanier()
};

function supprimerDuPanier(id) {
  panier = panier.filter(article => article.id !== id);

  localStorage.setItem('panier', JSON.stringify(panier))
  afficherPanier()
};

function augmenterQuantite(id) {
  const produitExistant = panier.find(p => p.id === id)

  if (produitExistant) {
    produitExistant.quantite += 1
}

  localStorage.setItem('panier', JSON.stringify(panier))
  afficherPanier()
};

function baisserQuantite(id) {
  const produitExistant = panier.find(p => p.id === id)

  if (produitExistant.quantite > 1) {
    produitExistant.quantite -= 1
}

  localStorage.setItem('panier', JSON.stringify(panier))
  afficherPanier()
};

function toggleAdresse(mode) {
  const container = document.getElementById('adresse-container')
  container.style.display = mode === 'livraison' ? 'block' : 'none'
};

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
        <button onclick="baisserQuantite(${p.id})">-</button>
        <span>x${p.quantite}</span>
        <button onclick="augmenterQuantite(${p.id})">+</button>
        <span>${(p.prix * p.quantite).toFixed(2)} €</span>
        <button onclick="supprimerDuPanier(${p.id})">❌</button>
      </div>
    `
  }).join('')

  container.innerHTML += `
  <div class="panier-total">Total : ${total.toFixed(2)} €</div>
  
  <div class="commande-form">
    <label>
      <input type="radio" name="modeLivraison" value="retrait" checked onchange="toggleAdresse(this.value)"> Retrait
    </label>
    <label>
      <input type="radio" name="modeLivraison" value="livraison" onchange="toggleAdresse(this.value)"> Livraison
    </label>
    
    <div id="adresse-container" style="display:none">
      <input type="text" id="adresse-input" placeholder="Votre adresse de livraison"/>
    </div>

    <button onclick="passerCommande()">Valider la commande</button>
  </div>
  `
};