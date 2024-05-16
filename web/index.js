// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjJZktUWg54R2MCtPQDaFmmTB32IEauxE",
  authDomain: "test-77e8f.firebaseapp.com",
  projectId: "test-77e8f",
  storageBucket: "test-77e8f.appspot.com",
  messagingSenderId: "1032322419142",
  appId: "1:1032322419142:web:b209d47854b7fa58de8ac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var email = document.getElementById('email')
var password = document.getElementById('password')

const auth = getAuth();
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    window.location.pathname("/admin.html");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });