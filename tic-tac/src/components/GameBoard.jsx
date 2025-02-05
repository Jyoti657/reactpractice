import { useStat, useState } from "react";
import player from "./Player";


export default function GameBoard({
  onSelectSquare,
  board,
  activeplayerSymbol,
}) {
  

  // const [gameBoard,setGameBoard]=useState(initialGameBoard);
  // function handleSelection(rowIndex,colIndex){
  //     setGameBoard((preGameBoard)=>{
  //         const updatBoard=[...preGameBoard.map((innerArray)=>[...innerArray])]
  //         preGameBoard[rowIndex][colIndex]=activeplayerSymbol;
  //         return updatBoard;
  //     });
  //     onSelectSquare()
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !==null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
