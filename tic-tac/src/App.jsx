import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./WINNING_COMBINATIONS.js";
import GameOver from "./components/GameOver.jsx";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentplayer = "x";
  if (gameTurns.length > 0 && gameTurns[0].player === "x") {
    currentplayer = "o";
  }
  return currentplayer;
}
function App() {
  const [player,setPlayers]=useState({
    'x':'player1',
    'o':'player2',
  });
  const [gameTurns, setGameTurn] = useState([]);

  // const [hasWinner,setHasWinner]=useState(false);
  // const[activePlayer,setactiveplayr]=useState('x');
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array=>[...array])];
    for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
   let winner;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol =gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol= gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column]
    if (firstSquareSymbol 
      && firstSquareSymbol===secondSquareSymbol
      &&firstSquareSymbol===thirdSquareSymbol){
        winner=player[firstSquareSymbol];
      }
  }
   const hasDraw=gameTurns.length === 9 && !winner

  function handlerSelected(rowIndex, colIndex) {
    // setactiveplayr((curActiveplayer)=>curActiveplayer==='x'? 'o':'x')

    setGameTurn((prevTurns) => {
      const currentplayer = deriveActivePlayer(prevTurns);
      // let currentplayer='x';
      // if(prevTurns.length>0 && prevTurns[0].player==='x'){
      //   currentplayer='o'
      // }
      const updateedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentplayer },
        ...prevTurns,
      ];
      return updateedTurn;
    });
  }
  function handleRestart(){
    setGameTurn([]);
  }
  function  handlePlayerNameChange(symbol,newName){
    setPlayers(prevPlayer=>{
      return{
        ...prevPlayer,
        [symbol]:newName  
      }
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initiaName="Player1"
            symbol="X"
            isactive={activePlayer === "x"}
            onChangeName={handlePlayerNameChange}

          />
          <Player
            initiaName="Player2"
            symbol="O"
            isactive={activePlayer === "o"}
            onChangeName={handlePlayerNameChange}

          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard
          onSelectSquare={handlerSelected}
          board={gameBoard}
          activeplayerSymbol={activePlayer}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
