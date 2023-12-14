import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwl7mOmWfsgG3bxq3HZguTf3928JuYZVI",
  authDomain: "website-status-scanner.firebaseapp.com",
  projectId: "website-status-scanner",
  storageBucket: "website-status-scanner.appspot.com",
  messagingSenderId: "940444830704",
  appId: "1:940444830704:web:54b227e0d325ef67afeb35",
  measurementId: "G-7BM5DED0BM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
