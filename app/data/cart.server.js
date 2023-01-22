export async function addToCart(currentCart, newCartItems) {
  let keyFound = false;
  for (let i = 0; i < currentCart.length; i++) {
    if (currentCart[i].name === newCartItems.name) {
      currentCart[i].quantity = Number(currentCart[i].quantity) + Number(newCartItems.quantity);
      keyFound = true
      break;
    }
  }
  if (!keyFound) {
    currentCart.push(newCartItems)
  }
  return currentCart
}

export async function deleteFromCart(currentCart, toDeleteCartItemName) {
  const updatedCart = currentCart.filter(currentCartItem => currentCartItem.name !== toDeleteCartItemName.name)
  return updatedCart
}