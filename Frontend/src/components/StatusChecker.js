import React, { useState } from "react";
import Navbar from "./Navbar";
import { auth } from "../config/firebase";
import { Navigate } from "react-router-dom";

const StatusChecker = () => {
  const [results, setResults] = useState(null);
  const [targetURL, setTargetURL] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const statusAPICall = async (e) => {
    e.preventDefault();
    const URL = "http://localhost:8000/api/";
    const data = {
      target_url: targetURL,
    };

    try {
      const response = await fetch(URL, {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        setErrorMessage("Error");
      }

      const responseData = await response.json();
      if (responseData?.error) {
        setErrorMessage("Invaild URL");
      } else {
        console.log(responseData);

        setErrorMessage(null);
        setResults(responseData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (auth.currentUser) {
    return (
      <div className="App-statuschecker">
        <Navbar />
        <h1>Status Checker</h1>
        <div className="statuscheckerForm">
          <form onSubmit={statusAPICall}>
            <label>Enter Target URL: </label>
            <input
              type="text"
              id="urlInput"
              required
              value={targetURL}
              onChange={(e) => setTargetURL(e.target.value)}
            ></input>
            <button type="submit">Start Scan</button>
          </form>
          {errorMessage && <p className="error">{errorMessage}</p>}
          {results ? (
            <>
              <h2>Scan Results:</h2>
              <ul>
                <li>Response Code: {results["response_code"]}</li>
                <li>Result: {results["result"]}</li>
              </ul>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  } else {
    return <Navigate to="/signup" replace />;
  }
};
export default StatusChecker;
