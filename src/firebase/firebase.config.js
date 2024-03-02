// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQNHcCKGLGHj0kg_Ub2VjyqAXY2TMX1Z4",
  authDomain: "mazhar-1cbdc.firebaseapp.com",
  projectId: "mazhar-1cbdc",
  storageBucket: "mazhar-1cbdc.appspot.com",
  messagingSenderId: "240411756907",
  appId: "1:240411756907:web:8f3acfeca51d80353be42e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);