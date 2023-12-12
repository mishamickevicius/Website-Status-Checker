import "./App.css";
import React from "react";
import { auth } from "./config/firebase";
import HomePage from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import StatusChecker from "./components/StatusChecker";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/status" element={<StatusChecker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
