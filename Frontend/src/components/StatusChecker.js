import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import Navbar from "./Navbar";

const StatusChecker = () => {
  return (
    <div className="App-statuschecker">
      <Navbar />
      <h1>Status Checker</h1>
    </div>
  );
};
export default StatusChecker;
