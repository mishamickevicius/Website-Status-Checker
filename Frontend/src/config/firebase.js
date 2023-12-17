import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt1sDJ7DpuPlmFd7DDUbauAdfh0t1bBdo",
  authDomain: "website-status-checker-408108.firebaseapp.com",
  projectId: "website-status-checker-408108",
  storageBucket: "website-status-checker-408108.appspot.com",
  messagingSenderId: "1008559792412",
  appId: "1:1008559792412:web:4c0ed2e591ed6dbbb31ad9",
  measurementId: "G-CDJV9JBES4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
