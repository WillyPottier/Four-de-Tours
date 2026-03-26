async function chargerProduits() {
  const response = await fetch('http://localhost:3000/produits');
  const produits = await response.json();

  const container = document.getElementById('produits-container');

  produits.forEach(produit => {
    container.innerHTML += `
      <div class="carte-produit">
        <h3>${produit.nom}</h3>
        <p>${produit.description}</p>
        <span>${produit.prix} €</span>
        <button>Commander</button>
      </div>
    `
  });
};

chargerProduits();