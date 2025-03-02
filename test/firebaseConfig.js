// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqyDIJ0NE5fXHApYHMthWhmqxawYtluKQ",
  authDomain: "bekind-f1834.firebaseapp.com",
  projectId: "bekind-f1834",
  storageBucket: "bekind-f1834.firebasestorage.app",
  messagingSenderId: "807430477989",
  appId: "1:807430477989:web:27488e222ef31c5da5554c",
  measurementId: "G-JCL4V6Q73J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { db };
