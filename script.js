  const products = {
  1: { name: "Laptop", price: 50000, image: "laptop.jpg" },
  2: { name: "Headphones", price: 2000, image: "head phone.jpg" },
  3: { name: "Smartphone", price: 30000, image: "mobile.jpg" },
  4: { name: "Shoes", price: 2499, image: "shoes.jpg" }
};


let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count
function updateCartCount() {
  document.querySelectorAll("#cart-count").forEach(el => {
    el.innerText = cart.length;
  });
}
updateCartCount();

// Add item
function addToCart(id) {
  cart.push(products[id]);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Item Added!");
}

// Display cart
 function displayCart() {
  const container = document.getElementById("cart-items");
  const totalText = document.getElementById("cart-total");
  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" width="80">
        <span>${item.name} - ₹${item.price}</span>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  totalText.innerText = "Total: ₹" + total;
}


function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  displayCart();
}

// Checkout
document.addEventListener("DOMContentLoaded", function () {
  displayCart();

  const btn = document.getElementById("checkout-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      alert("Order Placed!");
      cart = [];
      localStorage.removeItem("cart");
      updateCartCount();
      displayCart();
    });
  }
});
