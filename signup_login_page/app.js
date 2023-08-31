
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCa7dayXTpp7cHHdmV21rqhODkcLPxaepw",
  authDomain: "signup-signin-page-a5e47.firebaseapp.com",
  projectId: "signup-signin-page-a5e47",
  storageBucket: "signup-signin-page-a5e47.appspot.com",
  messagingSenderId: "274800855707",
  appId: "1:274800855707:web:6e1e98aa685f436f02543e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let reg_btn= document.getElementById("reg-btn");
let signUp_btn = document.getElementById("signup-btn");
let login_btn = document.getElementById("login-btn");
let login_btn2 = document.getElementById("login-btn2")
let signup__div = document.getElementById("signup-div");
let login__div = document.getElementById("login-div");


reg_btn.addEventListener("click", function () {
   signup__div.style.display = "inline"
login__div.style.display = "none"
}) 

login_btn2.addEventListener("click", function(){
     signup__div.style.display = "none"
login__div.style.display = "inline"
})

if (reg_btn) {
    signUp_btn.addEventListener("click", ()=>{
    let sign_up_email = document.getElementById("signup-email")
    let sign_up_password = document.getElementById("signup-password");
  createUserWithEmailAndPassword(auth, sign_up_email.value, sign_up_password.value)
  .then((res) => {
    // Signed in 
    const user = res.user;
    console.log("signup")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
})
} 

login_btn.addEventListener("click", ()=>{
    let login_email = document.getElementById("login-email")
    let login_password = document.getElementById("login-password")
signInWithEmailAndPassword(auth, login_email.value, login_password.value)
.then((resolve) => {
const user = resolve.user;
console.log("You have login")
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log("error", errorMessage)
});
})

