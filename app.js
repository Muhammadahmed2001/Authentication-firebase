

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
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


  
createUserWithEmailAndPassword(auth, "ahmed@gmail.com", "123456")
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });



