import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Navbar from "./Navbar";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
      <div className="signIn">
        <h2>Sign In</h2>
        <div className="signInBox">
          <form className="signInForm" onSubmit={signIn}>
            <label>Email: </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
          </form>

          <button className="googleBtn" onClick={signInWithGoogle}>
            Sign In With Google
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
