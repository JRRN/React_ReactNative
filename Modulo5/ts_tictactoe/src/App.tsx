import './App.css';
import { useState } from "react";
import Header from './Components/Header/Header';
import Board from './Components/Board/Board';

const PLAYERX: string = "Player 1 - Xs";
const PLAYER0: string = "Player 2 - 0s";

function App(): JSX.Element {
  const [turn, setTurn] = useState<string>(PLAYERX);
  const [values, setValues] = useState<string[][]>([["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]);

  return (
    <div className="App">
      <h2>Tic Tac Toe</h2>
      <Header turn={turn}></Header>
      <Board values={values}></Board>
    </div>
  );
}

export default App;