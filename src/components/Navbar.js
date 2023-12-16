import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  if (auth.currentUser) {
    return (
      <nav className="navbar">
        <a onClick={() => signOut(auth).then(() => window.location.reload())}>
          Log out
        </a>
      </nav>
    );
  } else {
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
