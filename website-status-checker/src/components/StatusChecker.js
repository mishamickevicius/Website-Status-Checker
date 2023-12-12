import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const StatusChecker = () => {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App-statuschecker">
      <h1>Status Checker</h1>
      <button onClick={logout}> Logout </button>
    </div>
  );
};
export default StatusChecker;
