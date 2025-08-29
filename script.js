     // Sample products
const products = [
  { id: 1, name: "Laptop", price: 50000, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Headphones", price: 2000, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Smartphone", price: 30000, image: "https://via.placeholder.com/200" },
  { id: 4, name: "Shoes", price: 1500, image: "https://via.placeholder.com/200" }
];

let cart = [];
let cartCount = 0;

// Display products on products.html
if (document.getElementById("product-list")) {
  const productList = document.getElementById("product-list");
  products.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

// Add to cart
function addToCart(id) {
  cart.push(id);
  cartCount++;
  document.querySelectorAll("#cart-count").forEach(el => el.innerText = cartCount);
  alert("Product added to cart!");
}
