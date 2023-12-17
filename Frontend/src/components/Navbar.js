import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  if (auth.currentUser) {
    // If there is a user signed in this will be the navbar displayed
    return (
      <nav className="navbar">
        <Link to="/status">Status Checker</Link>
        <a onClick={() => signOut(auth).then(() => window.location.reload())}>
          Log out
        </a>
      </nav>
    );
  } else {
    // If no user signed in then this will be the navbar displayed
    return (
      <div className="navbar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      </div>
    );
  }
};

export default Navbar;
