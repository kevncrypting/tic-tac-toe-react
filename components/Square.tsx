import React from "react";

interface SquareProps { // Declaring the type of each prop in an interface here as a feature of TypeScript
    value: string,
    onSquareClick: () => void
}

const Square = ({ value, onSquareClick }: SquareProps) => { // component Square takes in two props that follow the interface defined above

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
