// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQBNycGQOGdlvi6_Y0Pn_WBzpZCTVS784",
  authDomain: "interview-edge-b01c6.firebaseapp.com",
  projectId: "interview-edge-b01c6",
  storageBucket: "interview-edge-b01c6.firebasestorage.app",
  messagingSenderId: "6062668233",
  appId: "1:6062668233:web:0936f0a72efbade69fd018",
  measurementId: "G-BBSPNH2WCK"
};

// Initialize Firebase
const app = !getApp.length ? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
