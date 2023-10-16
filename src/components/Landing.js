import React, { useState } from "react";
import axios from "axios";
import "../styles/Landing.css";

const Landing = () => {
  const [inputText, setInputText] = useState("");
  const [description, setDescription] = useState("");
  const [queryKey, setQueryKey] = useState("");
  const [queryResult, setQueryResult] = useState("");

  const sanitizeString = (str) => str.replace(/ /g, "_").toLowerCase();

  const submitInput = () => {
    const sanitizedInput = sanitizeString(inputText);
    axios
      .post("http://localhost:9000/input", { input: sanitizedInput })
      .then((response) => {
        setDescription(response.data.description);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const queryInput = () => {
    const sanitizedQueryKey = sanitizeString(queryKey);
    axios
      .get(`http://localhost:9000/query?key=${sanitizedQueryKey}`)
      .then((response) => {
        setQueryResult(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <div className="input-section">
        <h2>Enter Disease</h2>
        <label>Disease Name:</label>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={submitInput}>Submit</button>
        <div className="description-container">
          <h3 className="desc-head">Description:</h3>
          <p className="landing-description">{description}</p>
        </div>
      </div>
      <div className="query-section">
        <h2>Query Disease</h2>
        <label>Disease Name:</label>
        <input
          type="text"
          value={queryKey}
          onChange={(e) => setQueryKey(e.target.value)}
        />
        <button onClick={queryInput}>Query Count</button>
        <div>
          <h3>Result:</h3>
          <p>{queryResult}</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
