import React from "react";
import Logo from "../logo/logo.svg";

const Card = (props) => {
  return (
    <div className="card">
      <div className="header">
        <img src={Logo} alt="logo" />
        <h1>Size calculator</h1>
      </div>
      {props.children}
    </div>
  );
};

export default Card;
