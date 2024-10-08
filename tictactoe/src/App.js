import './App.css';
import { Jatekter } from './components/Jatekter';
import { lista } from "./Adat.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">Tic Tac Toe</header>
      <article className="gridesnezet">
        <Jatekter sor={lista}/>
      </article>
      <footer>Készítette: Richter Balázs</footer>
    </div>
  );
}


export default App;
