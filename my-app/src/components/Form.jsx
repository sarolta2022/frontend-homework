import React from "react";

const Form = (props) => {
  return (
    <form type="submit">
      <div>{props.FormContent}</div>

      <button>{props.button}</button>
    </form>
  );
};

export default Form;
