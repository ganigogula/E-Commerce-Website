// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count everywhere
function updateCartCount() {
  document.querySelectorAll("#cart-count").forEach(el => {
    el.innerText = cart.length;
  });
}
updateCartCount();

// Product Data (must match your HTML buttons)
const products = {
  1: { name: "Laptop", price: 50000 },
  2: { name: "Headphones", price: 2000 },
  3: { name: "Smartphone", price: 30000 },
  4: { name: "Sports Shoes", price: 2499 },
  5: { name: "Smart Watch", price: 4999 },
  6: { name: "Camera", price: 42000 }
};

// Add to Cart
function addToCart(id) {
  cart.push(products[id]);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Product Added!");
}

// ================= CART PAGE =================

if (document.getElementById("cart-items")) {
  displayCart();
}

function displayCart() {
  const container = document.getElementById("cart-items");
  const totalText = document.getElementById("cart-total");

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.innerHTML = `
      <p>${item.name} - ₹${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
      <hr>
    `;
    container.appendChild(div);
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
if (document.getElementById("checkout-btn")) {
  document.getElementById("checkout-btn").addEventListener("click", function () {
    alert("Order Placed Successfully!");
    localStorage.removeItem("cart");
    cart = [];
    updateCartCount();
    displayCart();
  });
}
