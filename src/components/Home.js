import React, { useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { collection, query, where, limit, getDocs } from "firebase/firestore";

const UserHomePage = () => {
  const [userData, setUserData] = useState(null);
  const userDocRef = collection(db, "users");

  useEffect(() => {
    const queryUserData = async () => {
      try {
        const q = query(
          userDocRef,
          where("userId", "==", auth.currentUser.uid),
          limit(1)
        );
        const queryResults = await getDocs(q);

        queryResults.forEach((doc) => {
          setUserData(doc.data());
        });
      } catch (err) {
        console.log(err);
      }
    };
    queryUserData();
  }, []);

  return (
    <div className="homeContainer">
      <Navbar />
      <div className="homePage">
        <h1>Welcome Back {userData ? userData.username : "No User Data"}</h1>
        <Link to="/status">Start Tests</Link>
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
