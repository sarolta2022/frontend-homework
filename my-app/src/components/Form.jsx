import React from "react";

const Form = (props) => {
  return (
    <form type="submit" onSubmit={props.onSubmit}>
      <div>{props.children}</div>

      <button>{props.buttonText}</button>
    </form>
  );
};

export default Form;
