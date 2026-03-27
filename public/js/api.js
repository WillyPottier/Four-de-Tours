async function getProduits() {
  const response = await fetch('http://localhost:3000/produits')
  return await response.json()
}