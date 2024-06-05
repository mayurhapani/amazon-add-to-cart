import { cart, updateCartQuantity } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import { deliveryOptions, getDelivaryOption } from "../../data/deliveryOptions.js";

export function paymentSummary() {
  let totalAmount = 0;
  let totalShipping = 0;
  let totalBeforTax = 0;
  let tax = 0;
  let totalOrder = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    totalAmount += product.priceCents * cartItem.quantity;
    const deliveryOption = getDelivaryOption(cartItem.deliveryOptionId);
    totalShipping += deliveryOption.priceCents;
  });
  totalBeforTax = totalAmount + totalShipping;
  tax = totalBeforTax * 0.1;
  totalOrder = totalBeforTax + tax;

  document.querySelector(".js-payment-summary").innerHTML = `
    <div class="payment-summary-title">Order Summary</div>

    <div class="payment-summary-row">
    <div>Items (<span class="js-total-cart-items"></span>):</div>
    <div class="payment-summary-money">$${totalAmount / 100}</div>
    </div>

    <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">$${(totalShipping / 100).toFixed(2)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">$${(totalBeforTax / 100).toFixed(2)}</div>
    </div>

    <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">$${(tax / 100).toFixed(2)}</div>
    </div>

    <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">$${(totalOrder / 100).toFixed(2)}</div>
    </div>

    <button class="place-order-button button-primary">Place your order</button>`;

  updateCartQuantity(".js-total-cart-items");
}
