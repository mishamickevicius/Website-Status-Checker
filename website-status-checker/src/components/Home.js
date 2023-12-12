import React from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const HomePage = () => {
  console.log(auth.currentUser);
  if (auth.currentUser) {
    // If a user is currently logged in then this HomePage will display
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
    // If no user is logged in then this HomePage will display
    return (
      <>
        <Navbar />
        <div className="homePage">
          <h1>Welcome to our website!</h1>
          <p>Use this website to check the status of a website</p>
          <Link to="/signup">Get Started Today</Link>
        </div>
      </>
    );
  }
};

export default HomePage;
