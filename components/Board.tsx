import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true); // state variable 'xIsNext' has a default value of 'true' and is updated using the setter function 'setXIsNext'

  // Upon initial render, this is what 'xIsNext' looks like:
  // const xIsNext = true;

  const [squares, setSquares] = useState(Array(9).fill(null)); // state variable 'squares' has a default value of an array of 9 'null' values, and is updated using the setter function 'setSquares'

  // Upon initial render, this is what 'squares' looks like:
  // const squares = [null, null, null, null, null, null, null, null, null];

  let handleClick = (i: number) => { // creates a handler function called 'handleClick' that has a parameter called 'i' of type 'number', handles 'onSquareClick' events
    if (squares[i]) return; // this makes it so that if a square has already been clicked/assigned a value changing it from its initial 'null', it will return out of the handleClick function early

    const nextSquares = squares.slice(); // returns a shallow copy of the 'squares' array and assigns it to the variable 'nextSquares'

    (xIsNext) ? nextSquares[i] = 'X' : nextSquares[i] = 'O'; // using a ternary operator, checks if state variable 'xIsNext' is equal to true - if so, sets nextSquare[i] (i is the square position) equal to 'X', otherwise if false sets nextSquare[i] equal to 'O'

    setSquares(nextSquares); // updates state variable 'squares' to the value of 'nextSquares' - triggers a state change, causing the 'Board' and its child 'Square' components to re-render

    setXIsNext(!xIsNext); // updates state variable 'xIsNext' to the opposite value of whatever it currently is using the logical NOT! operator
  }

  return (
    <>
      <div className="board-row">
        {/* important to note here, we call our handler function inside of an anonymous function */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/> 
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
};

export default Board;
