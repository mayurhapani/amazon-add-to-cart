export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId, productQuantity) {
  let matchingItem;

  cart.forEach((cartProduct) => {
    if (productId === cartProduct.productId) {
      matchingItem = cartProduct;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += productQuantity;
  } else {
    cart.push({
      productId: productId,
      quantity: productQuantity,
      deliveryOptionId: "1",
    });
  }
  saveToStorage();
}

// <-----------remove from cart start----------->
export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
    cart = newCart;
    saveToStorage();
  });
}
// <-----------remove from cart end----------->

// <-----------update cart quantity start----------->
export function updateCartQuantity(className) {
  let cartQuantity = 0;

  cart.forEach((quantity) => {
    cartQuantity += quantity.quantity;
  });

  document.querySelector(className).innerHTML = cartQuantity;
}
// <-----------update cart quantity end----------->

// <-----------update quantity start----------->
export function updateQuantity(productId, productQuantity) {
  let matchingItem;

  cart.forEach((cartProduct) => {
    if (productId === cartProduct.productId) {
      matchingItem = cartProduct;
    }
  });

  if (matchingItem) {
    matchingItem.quantity = productQuantity;
  }
  saveToStorage();
}
// <-----------update quantity end----------->

// <-----------update delivery option id start----------->
export function updateDelevryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartProduct) => {
    if (productId === cartProduct.productId) {
      matchingItem = cartProduct;
    }
  });
  matchingItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}
// <-----------update delivery option id end----------->
