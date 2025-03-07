// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD7f3BE6vr90sgF1LyHB7LB0rTaHw1HctY",
  authDomain: "clone-rt-9192a.firebaseapp.com",
  projectId: "clone-rt-9192a",
  storageBucket: "clone-rt-9192a.firebasestorage.app",
  messagingSenderId: "241690718269",
  appId: "1:241690718269:web:5d74b9cf559c2d940aba54",
  measurementId: "G-CQ2PKB6DKS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
