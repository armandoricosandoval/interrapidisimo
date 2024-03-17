import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXQM2bCm3qLgg-ZhfYMqMJ3uKP_x7mES0",
  authDomain: "startupvortex-7dc99.firebaseapp.com",
  projectId: "startupvortex-7dc99",
  storageBucket: "startupvortex-7dc99.appspot.com",
  messagingSenderId: "159573419709",
  appId: "1:159573419709:web:cf0296df3136e29d63b9d4",
  measurementId: "G-BTHX4Z79H3",
};
const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAppAuth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

export { provider };
