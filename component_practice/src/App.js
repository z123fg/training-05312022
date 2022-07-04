//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Selected Value: </p>
      <br/>
      <input type="checkbox" id="c1"/>
      <label for="c1">Thing 1</label>
      <br/><br/>
      <input type="checkbox" id="c2"/>
      <label for="c2">Thing 2</label>
      <br/><br/>
      <input type="checkbox" id="c3"/>
      <label for="c3">Thing 3</label>
      <br/><br/>
      <input type="checkbox" id="c4"/>
      <label for="c4">Thing 4</label>
      <br/><br/>
      <button>Clear all</button>
      </header>
    </div>
  );
}

export default App;
