document.getElementById("signInForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

if (email === "") {
    alert("Please enter your email.");
    return;
}
if(password == ""){
    alert("please fill the password");
    return;
}

window.location.href = "index.html";

  });

  //authentication


  // Sign Up
  document.getElementById("signUpForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Signed up successfully!");
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  //emails to be allowed
// Whitelisted emails
const allowedEmails = [
  "prabalraizada@gmail.com.com",
  "satvikchandelnlg2002@gmail.com",
  "tusharloveigi@gmail.com",
];

// Sign In
document.getElementById("signInform").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;

  // Check if email is allowed
  if (!allowedEmails.includes(email)) {
    alert("This email is not authorized to sign in.");
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Signed in successfully!");
    })
    .catch((error) => {
      alert(error.message);
    });
});


//authbox
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("User is logged in:", user.email);
  } else {
    console.log("No user is logged in.");
  }
});

