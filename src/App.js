import "./styles.css";
import Header from "./Componets/Header";
import Player from "./Componets/Player";
import Board from "./Componets/Board";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Player whichPlayer="X" />
      <Player whichPlayer="O" />
      <Board />
    </div>
  );
}
