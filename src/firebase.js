// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,getAuth, sendPasswordResetEmail, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCsAxKGaqwaxWXoz3UCHKK1HAhrNozQA4",
  authDomain: "guest-book-91658.firebaseapp.com",
  projectId: "guest-book-91658",
  storageBucket: "guest-book-91658.appspot.com",
  messagingSenderId: "126938051286",
  appId: "1:126938051286:web:55e75eaa0b367b90968f77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const registerWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => userCredential.user);
}

const loginWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => userCredential.user);
}
const sendPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
    
}
const signInWithGoogle = async() => {
 const response = await signInWithPopup(auth, new GoogleAuthProvider());
  return response.user;
}

export {registerWithEmailAndPassword,loginWithEmailAndPassword,auth,sendPasswordReset,signInWithGoogle}