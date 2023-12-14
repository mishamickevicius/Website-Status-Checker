import React, { useState } from "react";
import Navbar from "./Navbar";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const createAccount = async () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <div className="signUp">
        <h1>Sign Up</h1>
      </div>
    </>
  );
};

export default SignUp;
