import React from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import Navbar from "./Navbar";

const HomePage = () => {
  console.log(auth.currentUser);
  if (auth.currentUser) {
    return (
      <div className="homePage">
        <h1>Welcome Back {auth?.currentUser.displayName}</h1>
        <button
          onClick={() => signOut(auth).then(() => window.location.reload())}
        >
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="homePage">
          <h1>Welcome to our website!</h1>
          <p>Use this website to check the status of a website</p>
        </div>
      </>
    );
  }
};

export default HomePage;
