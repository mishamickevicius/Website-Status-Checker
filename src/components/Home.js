import React, { useState } from "react";
import { auth, db } from "../config/firebase";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { collection, query, where, limit, getDocs } from "firebase/firestore";

const UserHomePage = () => {
  const [userData, setUserData] = useState(null);
  const userDocRef = collection(db, "users");
  const queryUserData = async () => {
    try {
      const q = query(
        userDocRef,
        where("userId", "==", auth.currentUser.uid),
        limit(1)
      );
      await getDocs(q);
      console.log();
    } catch (err) {
      console.log(err);
    }
  };
  console.log(queryUserData());
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="homePage">
        <h1>Welcome Back {auth?.currentUser.displayName}</h1>
      </div>
    </div>
  );
};

const NoUserHomePage = () => {
  return (
    <>
      <Navbar />
      <div className="homePage">
        <h1>Welcome to our website!</h1>
        <p>
          Use this Webapp to automate the task of checking your business's
          website status.
        </p>
        <Link to="/signup">Get Started Today</Link>
      </div>
    </>
  );
};

const HomePage = () => {
  return <>{auth.currentUser ? <UserHomePage /> : <NoUserHomePage />}</>;
};

export default HomePage;
