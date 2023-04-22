import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null)); // with the useState hook in the parent 'Board' component, we can now share state with each 'Square' component. This will be necessary when creating later functionality, as we need to know when a pattern of three X's or O's has been placed on the board to declare a winner! Here, the default value of the state variable 'squares' is an array of 9 values equal to 'null'.

  // This looks like, const squares = [null, null, null, null, null, null, null, null, null];

  let handleClick = (i: number) => { // creates a handler function for 'onSquareClick' events
    const nextSquares = squares.slice(); // returns a shallow copy of the 'squares' array - this is what we'll be changing as we never want to change the actual array! (example of enforcing immutability)
    nextSquares[i] = 'X'; // depending on the 'Square' component clicked, that particular index position of the 'nextSquares' array will be updated from 'null' to 'X'
    setSquares(nextSquares); // we use the setter function 'setSquares' to update our state variable 'squares' to the value of 'nextSquares' - this lets React know the state has changed and thus will re-render the 'Board' component as well as its child components!
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
