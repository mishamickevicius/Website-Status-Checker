import React, { useState } from "react";
import Navbar from "./Navbar";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleLogo from "../images/google_logo.png";
import { Navigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successfulSignUp, setSuccessfulSignUp] = useState(false);

  const createAccount = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
    } else if (password.length < 6) {
      setErrorMessage("Password needs to be more than 6 characters long");
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setSuccessfulSignUp(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const createAccountWithGoogle = async (e) => {
    e.preventDefault();
    await signInWithPopup(auth, googleProvider);
  };

  const signUpWithGoogle = async (e) => {
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
      <div className="signUp">
        <h1>Sign Up</h1>
        <div className="signUpBox">
          <form className="signUpForm" onSubmit={createAccount}>
            <label>Email: </label>
            <input
              type="text"
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
            {errorMessage && <p className="error">{errorMessage}</p>}
            <label>Confirm Password: </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Create Account</button>
          </form>
          <button className="googleBtn" onClick={createAccountWithGoogle}>
            Sign Up With Google
            <img src={GoogleLogo} className="googleLogo" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
