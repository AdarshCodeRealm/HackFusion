// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDKP7W97AewPThXKchlE83ECbsGrqQdR8Y",
  authDomain: "hackfusion-aa22f.firebaseapp.com",
  projectId: "hackfusion-aa22f",
  storageBucket: "hackfusion-aa22f.appspot.com",
  messagingSenderId: "972587990763",
  appId: "1:972587990763:web:18bcb88f8950423f7388ae",
  measurementId: "G-1Z64RZYB2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const authenticate = getAuth(app);
 const GoogleAuthProviders = new GoogleAuthProvider()
export {authenticate,GoogleAuthProviders};