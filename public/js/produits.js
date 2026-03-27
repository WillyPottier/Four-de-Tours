function afficherProduits(produits) {
  const container = document.getElementById('produits-container')
  produits.forEach(produit => {
    container.innerHTML += `
      <div class="carte-produit">
        <h3>${produit.nom}</h3>
        <p>${produit.description}</p>
        <span>${produit.prix} €</span>
        <button onclick='ajouterAuPanier(${JSON.stringify(produit)})'>Commander</button>
      </div>
    `
  })
}