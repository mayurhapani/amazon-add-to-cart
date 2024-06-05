<<<<<<< Updated upstream
import { cart, addToCart, updateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";

let productsHTML = "";
let productQuantity;
let addedSetTimeout;
var a = 1;

updateCartQuantity(".js-cart-quantity");

products.forEach((product) => {
  productsHTML += `<div class="product-container">
                    <div class="product-image-container">
                        <img class="product-image"
                        src="${product.image}">
                    </div>
    
                    <div class="product-name limit-text-to-2-lines">
                        ${product.name}
                    </div>
    
                    <div class="product-rating-container">
                        <img class="product-rating-stars"
                        src="images/ratings/rating-${product.rating.stars * 10}.png">
                        <div class="product-rating-count link-primary">
                        ${product.rating.count}
                        </div>
                    </div>
    
                    <div class="product-price">
                        $${(product.priceCents / 100).toFixed(2)}
                    </div>
    
                    <div class="product-quantity-container">
                        <select class="productQuantity" data-product-id="${product.id}">
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        </select>
                    </div>
    
                    <div class="product-spacer"></div>
    
                    <div class="added-to-cart added-to-cart-${product.id}">
                        <img src="images/icons/checkmark.png">
                        Added
                    </div>
    
              <button class="add-to-cart-button button-primary js-add-to-cart-button"
              data-product-id="${product.id}">
                Add to Cart
              </button>
            </div>`;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

document.querySelectorAll(".js-add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    const addedToCart = document.querySelector(`.added-to-cart-${productId}`);

    // console.log(addedToCart);

    document.querySelectorAll(".productQuantity").forEach((quantity) => {
      const quantityProductId = quantity.dataset.productId;

      if (productId === quantityProductId) {
        productQuantity = +quantity.value;
      }
    });

    // <------------------------added massage start------------->

    addedToCart.style.opacity = "1";
    clearTimeout(addedSetTimeout);

    addedSetTimeout = setTimeout(() => {
      addedToCart.style.opacity = "0";
    }, 500);

    // <------------------------added massage end------------->

    addToCart(productId, productQuantity);
    updateCartQuantity(".js-cart-quantity");
  });
});
=======
import { cart, addToCart, updateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";

let productsHTML = "";
let productQuantity;
let addedSetTimeout;
var a = 1;

updateCartQuantity(".js-cart-quantity");

products.forEach((product) => {
  productsHTML += `<div class="product-container">
                    <div class="product-image-container">
                        <img class="product-image"
                        src="${product.image}">
                    </div>
    
                    <div class="product-name limit-text-to-2-lines">
                        ${product.name}
                    </div>
    
                    <div class="product-rating-container">
                        <img class="product-rating-stars"
                        src="images/ratings/rating-${product.rating.stars * 10}.png">
                        <div class="product-rating-count link-primary">
                        ${product.rating.count}
                        </div>
                    </div>
    
                    <div class="product-price">
                        $${(product.priceCents / 100).toFixed(2)}
                    </div>
    
                    <div class="product-quantity-container">
                        <select class="productQuantity" data-product-id="${product.id}">
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        </select>
                    </div>
    
                    <div class="product-spacer"></div>
    
                    <div class="added-to-cart added-to-cart-${product.id}">
                        <img src="images/icons/checkmark.png">
                        Added
                    </div>
    
              <button class="add-to-cart-button button-primary js-add-to-cart-button"
              data-product-id="${product.id}">
                Add to Cart
              </button>
            </div>`;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

document.querySelectorAll(".js-add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    const addedToCart = document.querySelector(`.added-to-cart-${productId}`);

    // console.log(addedToCart);

    document.querySelectorAll(".productQuantity").forEach((quantity) => {
      const quantityProductId = quantity.dataset.productId;

      if (productId === quantityProductId) {
        productQuantity = +quantity.value;
      }
    });

    // <------------------------added massage start------------->

    addedToCart.style.opacity = "1";
    clearTimeout(addedSetTimeout);

    addedSetTimeout = setTimeout(() => {
      addedToCart.style.opacity = "0";
    }, 500);

    // <------------------------added massage end------------->

    addToCart(productId, productQuantity);
    updateCartQuantity(".js-cart-quantity");
  });
});
>>>>>>> Stashed changes
