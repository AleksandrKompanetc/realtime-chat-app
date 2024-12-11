// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK5fmeQENAMjhg7a98z8Am72dFhjoo1Ak",
  authDomain: "realtime-chat-app-2b26c.firebaseapp.com",
  projectId: "realtime-chat-app-2b26c",
  storageBucket: "realtime-chat-app-2b26c.firebasestorage.app",
  messagingSenderId: "674903973040",
  appId: "1:674903973040:web:9a4af4d151d1f11576ef75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()