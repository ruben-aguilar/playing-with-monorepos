import logo from './logo.svg';
import './App.css';
import { Name } from "name-component"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Name />
      </header>
    </div>
  );
}

export default App;
