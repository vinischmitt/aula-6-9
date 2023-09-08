// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnzNGP7N45_8h_-a1_6Qr0mqUcACKzXdU",
  authDomain: "jorge-d0ff8.firebaseapp.com",
  projectId: "jorge-d0ff8",
  storageBucket: "jorge-d0ff8.appspot.com",
  messagingSenderId: "945546198835",
  appId: "1:945546198835:web:fc9f36c980485e2a778846",
  measurementId: "G-LRSE0ZDVRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);