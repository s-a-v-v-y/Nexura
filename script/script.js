const searchBox = document.getElementById("searchBox");
const placeholders = [
  "Search your sports items",
  "Find best football",
  "Discover Badminton equipments",
  "Buy cricket stuff",
  "Explore hockey sticks"
];

let index = 0;

setInterval(() => {
  searchBox.placeholder = placeholders[index];
  index = (index + 1) % placeholders.length;
}, 2000); 


  const countdownTarget = new Date();
  countdownTarget.setHours(countdownTarget.getHours() + 10);
  function updateCountdown() {
    const now = new Date();
    const diff = countdownTarget - now;

    if (diff <= 0) {
      document.getElementById("time").innerHTML = "Summer Sale is live now !!!!!!!";
      clearInterval(timer);
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML = 
      `Summer Sale live in ${hours}h ${minutes}m ${seconds}s`;
  }
  const timer = setInterval(updateCountdown, 1000);
  updateCountdown(); 
//products

  const quantities = [0, 0, 0, 0, 0];

const products = [
  { name: "Kashmiri Willow Bat", price: 4500 },
  { name: "Kookabura Ball", price: 900 },
  { name: "Wickets", price: 1600 },
  { name: "Gloves", price: 1000 },
  { name: "Cricket kit", price: 12000 },
];

function updateCartStorage() {
  localStorage.setItem("cartItems", JSON.stringify(products.map((p, i) => ({
    ...p,
    quantity: quantities[i]
  })).filter(item => item.quantity > 0)));
}

function increaseQty(index) {
  quantities[index]++;
  document.getElementById(`qty-${index}`).textContent = quantities[index];
  updateCartStorage();
}

function decreaseQty(index) {
  if (quantities[index] > 1) {
    quantities[index]--;
    document.getElementById(`qty-${index}`).textContent = quantities[index];
    updateCartStorage();
  }
}
//back to top
// Show button after scrolling 300px
window.addEventListener("scroll", function () {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Scroll to top on button click
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


//authentication

  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "YOUR_APP_ID"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

