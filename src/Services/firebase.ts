// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import  {getFirestore} from 'firebase/firestore';
import {signInWithEmailAndPassword} from "firebase/auth";

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
export const auth = getAuth();
export const db = getFirestore(app);

export function signIn(usuario: string, senha: string) {
  return signInWithEmailAndPassword(auth, usuario, senha);
}