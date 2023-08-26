import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import TicTacToe from './Components/Games/TicTacToe';

export default function App() {
  return <div>
    <h1>Mis Juegos</h1>
    <nav style={{ borderBottom: "solid 1px", paddingBottom: "10px" }}>
      <Link to='/'>Home</Link>
      <Link to='/TicTacToe'>TicTacToe</Link>
    </nav>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/tictactoe' element={<TicTacToe />} />
    </Routes>
  </div>
};