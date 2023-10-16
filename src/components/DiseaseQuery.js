import React, { useState } from "react";
import axios from "axios";

const Landing = () => {
  const [inputText, setInputText] = useState("");
  const [queryKey, setQueryKey] = useState("");
  const [queryResult, setQueryResult] = useState("");

  const submitInput = () => {
    axios
      .post("http://localhost:9000/input", { input: inputText })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const queryInput = () => {
    axios
      .get(`http://localhost:9000/query?key=${queryKey}`)
      .then((response) => {
        setQueryResult(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <h1>Health Care App</h1>
      <div>
        <label>Enter Disease:</label>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={submitInput}>Submit</button>
      </div>
      <div>
        <label>Query Disease:</label>
        <input
          type="text"
          value={queryKey}
          onChange={(e) => setQueryKey(e.target.value)}
        />
        <button onClick={queryInput}>Query</button>
        <p>Result: {queryResult}</p>
      </div>
    </div>
  );
};

export default Landing;
