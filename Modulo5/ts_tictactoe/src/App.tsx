import './App.css';
import { useEffect, useState } from "react";
import Header from './Components/Header/Header';
import Board from './Components/Board/Board';
import Reset from './Components/Reset/Reset';
import LoadGame from './Components/LoadGame/LoadGame';

const PLAYERX: string = "Player 1 - Xs";
const PLAYER0: string = "Player 2 - 0s";

function App(): JSX.Element {
  const [turn, setTurn] = useState<string>(PLAYERX);
  const [values, setValues] = useState<string[][]>([["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]);
  const [moves, setMoves] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchData(): Promise<void> {
    const request: Response = await fetch('https://api.npoint.io/c734e05e43c5b87dd971');
    const response: any = await request.json();
    setTurn(response.turn);
    setMoves(response.moves);
    setValues(response.values);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [])


  function appClick(rowNum: number, columnNum: number): void {
    let valuesCopy: string[][] = JSON.parse(JSON.stringify(values));
    let newMovement: string = turn === PLAYERX ? 'X' : '0';
    valuesCopy[rowNum][columnNum] = newMovement;
    setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX);
    setValues(valuesCopy);
    setMoves(moves + 1)
  }

  function resetClick(): void {
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