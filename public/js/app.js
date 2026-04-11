let produits = [];

async function init() {
  produits = await getProduits()
  afficherProduits(produits)
  afficherPanier()
}

init()