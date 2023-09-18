  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

  import {getAuth, signInWithPopup ,GoogleAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBcLcKtYS5MoNE22uwtlXgdD_hC75Lh948",
    authDomain: "fir-1e922.firebaseapp.com",
    projectId: "fir-1e922",
    storageBucket: "fir-1e922.appspot.com",
    messagingSenderId: "154946237363",
    appId: "1:154946237363:web:cb4a650acfeedc995bd1c6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const fbprovider = new FacebookAuthProvider();

  let loginWithGoogle = document.getElementById("loginWithGoogle").addEventListener("click", ()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("user", user)
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
    const email = error.customData.email;
  
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("error----->>>>", error )
  });
  })



  ///Facebook>>>>>>>>>>>>>
  let loginWithFaceboook = document.getElementById("loginWithFaceboook").addEventListener("click", ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
    
      const user = result.user;
  
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      console.log("user", user)
    })
    .catch((error) => {
     
      const errorCode = error.code;
      const errorMessage = error.message;
  
      const email = error.customData.email;
     
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log("error----->>>>", error )
    });
  })