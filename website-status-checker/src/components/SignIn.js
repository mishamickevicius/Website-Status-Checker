import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Navbar from "./Navbar";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <input
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password..."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}>Sign In</button>

        <button onClick={signInWithGoogle}> Sign In With Google </button>
      </div>
    </>
  );
};

export default SignIn;
