

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDuOrp8JQixQzRW9yojXIWP1EF8U74uCBk",
  authDomain: "authentication-firebase-e23fb.firebaseapp.com",
  projectId: "authentication-firebase-e23fb",
  storageBucket: "authentication-firebase-e23fb.appspot.com",
  messagingSenderId: "580457386780",
  appId: "1:580457386780:web:a63da704563d16a3bce0d9"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);






let login = document.getElementById("login");
let getButton = document.getElementById("getButton")
getButton.addEventListener("click", () => {

  login.innerHTML = `  <div class="form-box">
  <form class="form">
      <span class="title">Sign up</span>
      <span class="subtitle">Create a free account with your email.</span>
      <div class="form-container">
          <input id="signUpEmail" type="email" class="input" value="" placeholder="Email">
          <input id="signUpPassword" type="password" class="input" placeholder="Password">
      </div>
      <button id="singUpBtn">Sign up</button>
  </form>
  <!-- <div class="form-section">
        <p>Have an account? <a href="signIn.html">Log in</a> </p>
        </div> -->
</div>
            
    `
    getButton.style.display = "none"
  })
    




let addUser = document.getElementById("addUser")

addUser.addEventListener("click",()=>{
  let signUpEmail = document.getElementById("signUpEmail")
  let signUpPassword = document.getElementById("signUpPassword")
  createUserWithEmailAndPassword(auth, signUpEmail.value, signUpPassword.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);

    })

});