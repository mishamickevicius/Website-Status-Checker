import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Navbar from "./Navbar";
import GoogleLogo from "../images/google_logo.png";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successfulSignUp, setSuccessfulSignUp] = useState(false);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessfulSignUp(true);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      setSuccessfulSignUp(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {successfulSignUp ? <Navigate to="/" /> : <></>}
      <Navbar />
      <div className="signIn">
        <h2>Sign In</h2>
        <div className="signInBox">
          <form className="signInForm" onSubmit={signIn}>
            <label>Email: </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign In</button>
          </form>

          <button className="googleBtn" onClick={signInWithGoogle}>
            Sign In With Google
            <img src={GoogleLogo} className="googleLogo" alt="Google Logo" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
