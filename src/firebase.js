// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9l3l6NJVYJldj1U6CT1vEXvV7j3M3P04",
  authDomain: "chat-app-bb30b.firebaseapp.com",
  projectId: "chat-app-bb30b",
  storageBucket: "chat-app-bb30b.appspot.com",
  messagingSenderId: "191319925886",
  appId: "1:191319925886:web:104d4c6fa278962ffe242f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)