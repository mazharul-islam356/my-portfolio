// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa46WuCdb2NJvSXDLMVjzQmgAR0x482Sk",
  authDomain: "my-portfolio-c317a.firebaseapp.com",
  projectId: "my-portfolio-c317a",
  storageBucket: "my-portfolio-c317a.appspot.com",
  messagingSenderId: "6145358296",
  appId: "1:6145358296:web:cd6473d57cfb282860daad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);