import React, { useState } from "react";
import Navbar from "./Navbar";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleLogo from "../images/google_logo.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const createAccount = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const signUpWithGoogle = async () => {};
  return (
    <>
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
          <button className="googleBtn" onClick={signUpWithGoogle}>
            Sign In With Google
            <img src={GoogleLogo} className="googleLogo" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
