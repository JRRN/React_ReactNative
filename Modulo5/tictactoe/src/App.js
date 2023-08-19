import './App.css';
import {useState} from "react";
import Header from './Components/Header/Header';
import Board from './Components/Board/Board';   

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

function App() {
  const [turn, setTurn] = useState(PLAYERX);
  const [values, setValues] = useState([["-","-","-"],["-","-","-"],["-","-","-"]]);

  return (
    <div className="App">
      <h2>Tic Tac Toe</h2>
      <Header turn={turn}></Header>
      <Board values={values}></Board>
    </div>
  );
}

export default App;
