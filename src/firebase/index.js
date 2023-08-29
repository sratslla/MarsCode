// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2KBz0ECYoKNiM4j9iShZjFZtuiMid_KE",
  authDomain: "morse-code-auth.firebaseapp.com",
  projectId: "morse-code-auth",
  storageBucket: "morse-code-auth.appspot.com",
  messagingSenderId: "588139408226",
  appId: "1:588139408226:web:aa3beddf7ee6e0d359da3b",
  measurementId: "G-M8YZ7HJV1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);