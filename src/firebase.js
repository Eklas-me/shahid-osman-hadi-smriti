// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// REPLACE THESE WITH YOUR OWN KEYS AFTER CREATING PROJECT IN FIREBASE CONSOLE
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "shahid-osman-hadi.firebaseapp.com",
  projectId: "shahid-osman-hadi",
  storageBucket: "shahid-osman-hadi.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
