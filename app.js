

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateEmail } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
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


let homeBtn = document.getElementById("homeBtn");






let signUp = document.getElementById("signUp");
let creatUser = document.getElementById("creatUser")
creatUser.addEventListener("click", () => {
  
  signUp.style.display = "block";
  homeBtn.style.display = "none"
})


let signUpEmail = document.getElementById("signUpEmail")
let signUpPassword = document.getElementById("signUpPassword")
let singUpBtnForCreatUser = document.getElementById("singUpBtn")
singUpBtnForCreatUser.addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, signUpEmail.value, signUpPassword.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user + "user")
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage + "err");
      
    })

});





let login = document.getElementById("login");
let logInUser = document.getElementById("logInUser")
logInUser.addEventListener("click", ()=>{
  login.style.display = "block";
  homeBtn.style.display = "none"

})



let signInEmail = document.getElementById("signInEmail")
let signInPassword = document.getElementById("signInPassword")
let logInBtn = document.getElementById("logInBtn");
logInBtn.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user + "done")

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
})






updateEmail(auth.currentUser, "user@example.com").then(() => {

}).catch((error) => {
  
});