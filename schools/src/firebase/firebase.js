import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK-dwW2ISCrgmf0jnO6ARUNczMMuuRB3c",
  authDomain: "interrapidisimoprueba.firebaseapp.com",
  projectId: "interrapidisimoprueba",
  storageBucket: "interrapidisimoprueba.appspot.com",
  messagingSenderId: "709086552686",
  appId: "1:709086552686:web:9e361084368af8d722bc7f",
  measurementId: "G-50WRJPVZRG"
};
const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAppAuth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

export { provider };
