import React from "react";
import { useState } from "react";

const Square = () => {
  // useState hook holds an array with a value and a setter function, default value is set to null here
  const [value, setValue] = useState(null);

  let handleClick = () => {
    // creates a handler function for the click event - when called, 'setValue' changes the 'value' to X
    setValue("X");
  };

  return (
    // adds the 'handleClick' function to the button, which is called when the button is clicked
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
