// ================= PRODUCT DATA =================
const products = {
  1: { name: "Laptop", price: 50000 },
  2: { name: "Headphones", price: 2000 },
  3: { name: "Smartphone", price: 30000 },
  4: { name: "Sports Shoes", price: 2499 },
  5: { name: "Smart Watch", price: 4999 },
  6: { name: "Camera", price: 42000 }
};

// ================= LOAD CART =================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ================= UPDATE CART COUNT =================
function updateCartCount() {
  document.querySelectorAll("#cart-count").forEach(el => {
    el.innerText = cart.length;
  });
}
updateCartCount();

// ================= ADD TO CART =================
function addToCart(id) {
  cart.push(products[id]);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Product Added to Cart!");
}

// ================= DISPLAY CART =================
function displayCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalText = document.getElementById("cart-total");

  if (!cartContainer) return;

  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.innerHTML = `
      <p>${item.name} - ₹${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
      <hr>
    `;
    cartContainer.appendChild(div);
  });

  totalText.innerText = "Total: ₹" + total;
}

// ================= REMOVE ITEM =================
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  displayCart();
}

// ================= CHECKOUT =================
function setupCheckout() {
  const checkoutBtn = document.getElementById("checkout-btn");
  if (!checkoutBtn) return;

  checkoutBtn.addEventListener("click", function () {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert("Order Placed Successfully!");
    localStorage.removeItem("cart");
    cart = [];
    updateCartCount();
    displayCart();
  });
}

// ================= INITIALIZE =================
displayCart();
setupCheckout();
