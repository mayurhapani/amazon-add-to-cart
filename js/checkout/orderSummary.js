// import {
//   cart,
//   removeFromCart,
//   updateCartQuantity,
//   updateQuantity,
//   updateDelevryOption,
// } from "../../data/cart.js";
// import { products, getProduct } from "../../data/products.js";
// import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
// import { deliveryOptions, getDelivaryOption } from "../../data/deliveryOptions.js";
// import { paymentSummary } from "./paymentSummary.js";

function displayCart() {
  updateCartQuantity(".js-total-quantity");
  let cartItemHtml = "";

  cart.forEach((cartItem) => {
    const matchingItem = getProduct(cartItem.productId);
    const deliveryOption = getDelivaryOption(cartItem.deliveryOptionId);
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.delevryDays, "days");
    const dateSring = deliveryDate.format("dddd, MMMM D");

    cartItemHtml += `<div class="cart-item-container  
                js-cart-item-container-${matchingItem.id}">          
              <div class="delivery-date">Delivery date: ${dateSring}</div>

              <div class="cart-item-details-grid">
                <img class="product-image" src="${matchingItem.image}" />

                <div class="cart-item-details">
                  <div class="product-name">${matchingItem.name}</div>
                  <div class="product-price">$${(matchingItem.priceCents / 100).toFixed(2)}</div>
                  <div class="product-quantity">
                    <span> Quantity: <span class="quantity-label js-quantity-label-${
                      matchingItem.id
                    }">${cartItem.quantity}</span> </span>
                    <span class="update-quantity-link link-primary js-update-link" data-product-id=${
                      matchingItem.id
                    }> Update </span>
                    <input class="quantity-input js-quantity-input-${
                      matchingItem.id
                    } d-none" type="number" min="1" 
                    value="${cartItem.quantity}">
                    <span class="save-quantity-link link-primary js-save-quantity-link d-none"
                    data-product-id=${matchingItem.id}>Save</span>
                    
                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id=${
                      matchingItem.id
                    }> Delete </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">Choose a delivery option:</div>
                  
                  ${deliveryOptionHTML(matchingItem, cartItem)}
                </div>
              </div>
            </div>`;
  });
  document.querySelector(".js-order-summary").innerHTML = cartItemHtml;

  updateDeliveryOption();

  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      // console.log(cart);
      const container = document.querySelector(`.js-cart-item-container-${productId}`);

      container.remove();
      updateCartQuantity(".js-total-quantity");
      paymentSummary();
    });
  });

  document.querySelectorAll(".js-update-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;

      const container = document.querySelector(`.js-cart-item-container-${productId}`);

      container.classList.add("is-editing-quantity");
    });
  });

  document.querySelectorAll(".js-save-quantity-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;

      const newInput = +document.querySelector(`.js-quantity-input-${productId}`).value;
      updateQuantity(productId, newInput);

      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      container.classList.remove("is-editing-quantity");

      document.querySelector(`.js-quantity-label-${productId}`).innerHTML = newInput;
      updateCartQuantity(".js-total-quantity");
      paymentSummary();
    });
  });

  function deliveryOptionHTML(matchingItem, cartItem) {
    let html = "";
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.delevryDays, "days");
      const dateString = deliveryDate.format("dddd, MMMM D");

      const priceString =
        deliveryOption.priceCents === 0 ? "FREE" : `$${deliveryOption.priceCents / 100} -`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `<div class="delivery-option js-delivery-option"
              data-product-id="${matchingItem.id}"
              data-delivery-option-id="${deliveryOption.id}">
              <input type="radio"
              ${isChecked ? "checked" : ""} class="delivery-option-input" name="delivery-option-${
        matchingItem.id
      }" />
              <div>
                <div class="delivery-option-date">${dateString}</div>
                <div class="delivery-option-price">${priceString} Shipping</div>
              </div>
          </div>`;
    });
    return html;
  }

  function updateDeliveryOption() {
    document.querySelectorAll(".js-delivery-option").forEach((element) => {
      element.addEventListener("click", () => {
        // console.log("hii");
        const productId = element.dataset.productId;
        const deliveryOptionId = element.dataset.deliveryOptionId;
        // console.log(productId, deliveryOptionId);
        updateDelevryOption(productId, deliveryOptionId);
        displayCart();
        paymentSummary();
      });
    });
  }
}
