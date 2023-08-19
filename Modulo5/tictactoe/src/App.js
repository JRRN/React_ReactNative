import './App.css';
import { useState, useEffect } from "react";
import Header from './Components/Header/Header';
import Board from './Components/Board/Board';
import Reset from './Components/Reset/Reset';
import LoadGame from './Components/LoadGame/LoadGame';


const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

function App() {
  const [turn, setTurn] = useState(PLAYERX);
  const [values, setValues] = useState([["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]);
  const [moves, setMoves] = useState(0);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const request = await fetch('https://api.npoint.io/c734e05e43c5b87dd971');
    const response = await request.json();
    setTurn(response.turn);
    setMoves(response.moves);
    setValues(response.values);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [])


  function appClick(rowNum, columnNum) {
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMovement = turn === PLAYERX ? 'X' : '0';
    valuesCopy[rowNum][columnNum] = newMovement;
    setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX);
    setValues(valuesCopy);
    setMoves(moves + 1)
    //checkWinner()
  }

  function resetClick() {
    setTurn(PLAYERX);
    setValues([["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]);
    setMoves(0);
  }


  return (
    <div className="App">
      <h2>Tic Tac Toe</h2>
      {loading ?
        <h1>"LOADING"</h1> :
        <div><Header turn={turn}></Header>
          <Board values={values} appClick={appClick}></Board>
          <h3>Número de movimientos: {moves}</h3>
          <Reset resetClick={resetClick} />
          <LoadGame loadClick={fetchData}/>
        </div>
      }
    </div>
  );
}

export default App;
