// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZDfCNPxxYqBY5AFq2BGEzyyUlwoiW1bw",
  authDomain: "productmanagementsystem-c9628.firebaseapp.com",
  projectId: "productmanagementsystem-c9628",
  storageBucket: "productmanagementsystem-c9628.appspot.com",
  messagingSenderId: "857035742928",
  appId: "1:857035742928:web:4239dc5858c2233162c8d5",
  measurementId: "G-2HVP5D8N35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app; 
