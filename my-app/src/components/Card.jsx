import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="header">
        <img src="../logo/logo.svg" alt="logo" />
        <h1>Size calculator</h1>
      </div>
      {props.children}
    </div>
  );
};

export default Card;
