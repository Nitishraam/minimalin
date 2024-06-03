

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

 
  const firebaseConfig = {
    apiKey: "AIzaSyA8eiK80SkCTl90MWm-BE3KmGt2GkqXQpA",
    authDomain: "first-e779c.firebaseapp.com",
    projectId: "first-e779c",
    storageBucket: "first-e779c.appspot.com",
    messagingSenderId: "428835528879",
    appId: "1:428835528879:web:0471eabc0b273f0883345a",
    measurementId: "G-PB3PHRZN14"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

function create() {
   
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}