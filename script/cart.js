const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const container = document.getElementById("cart-container");
let total = 0;

cartItems.forEach(item => {
  total += item.price * item.quantity;

  const div = document.createElement("div");
  div.className = "cart-item";
  div.innerHTML = `
    <span>${item.name} x ${item.quantity}</span>
    <span>₹${item.price * item.quantity}</span>
  `;
  container.appendChild(div);
  });

document.getElementById("total").textContent = `Total: ₹${total}`;