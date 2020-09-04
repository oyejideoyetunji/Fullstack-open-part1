import React from "react";

const Button = ({ name, handleClick }) => {
  return (
    <button name={name} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
