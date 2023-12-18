import React, { useState } from "react";
import Navbar from "./Navbar";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleLogo from "../images/google_logo.png";
import { Navigate } from "react-router-dom";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successfulSignUp, setSuccessfulSignUp] = useState(false);
  const userDocRef = collection(db, "users");
  let payload = {};

  const createAccount = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
    } else if (password.length < 6) {
      setErrorMessage("Password needs to be more than 6 characters long");
    } else if (username.length < 4 || username.length >= 15) {
      setErrorMessage("Username must be between 4 and 15 characters.");
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password).then(
          (cred) => {
            payload = {
              userId: cred.user.uid,
              email: cred.user.email,
              username: username,
              dateCreated: new Date(),
            };
            console.log(payload);
          }
        );
        await addDoc(userDocRef, payload).then(console.log("Doc Added"));
        setSuccessfulSignUp(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const createAccountWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider).then((cred) => {
        payload = {
          userId: cred.user.uid,
          email: cred.user.email,
          username: cred.user.displayName,
          dateCreated: new Date(),
        };
      });
      await addDoc(userDocRef, payload).then(console.log("Doc Added"));
      setSuccessfulSignUp(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (auth.currentUser) {
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
              />{" "}
              <label>Username: </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label>Password: </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Confirm Password: </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {errorMessage && <p className="error">{errorMessage}</p>}
              <button type="submit">Create Account</button>
            </form>
            <button className="googleBtn" onClick={createAccountWithGoogle}>
              Sign Up With Google
              <img src={GoogleLogo} className="googleLogo" alt="Google Logo" />
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return <Navigate to="/signup" replace />;
  }
};

export default SignUp;
