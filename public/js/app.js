async function init() {
  const produits = await getProduits()
  afficherProduits(produits)
}

init()