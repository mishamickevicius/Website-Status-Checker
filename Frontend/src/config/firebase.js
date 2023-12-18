import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYG2GRuMXXwu9pWXeBmd4wQsEcPqD75_Q",
  authDomain: "website-status-checker-v1.firebaseapp.com",
  projectId: "website-status-checker-v1",
  storageBucket: "website-status-checker-v1.appspot.com",
  messagingSenderId: "557550734846",
  appId: "1:557550734846:web:363d924ce5401f7e1c84af",
  measurementId: "G-PSB1EWE53F",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
