// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRgeSasM-awQQa1TyEXc3X_lxjq45ICKQ",
  authDomain: "antemaro-mobile-app---tracker.firebaseapp.com",
  projectId: "antemaro-mobile-app---tracker",
  storageBucket: "antemaro-mobile-app---tracker.firebasestorage.app",
  messagingSenderId: "1088660127288",
  appId: "1:1088660127288:web:250f8b64ee7fc432c170cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)