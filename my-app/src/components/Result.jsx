import React from "react";

const Result = (props) => {
  return (
    <div className="result">
      <span className="resultText">Your size is{props.result}</span>
      <h1>2 or S</h1>
    </div>
  );
};

export default Result;
