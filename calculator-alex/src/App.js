import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table className="calculator">
          <Calculator />
        </table>
      </header>
    </div>
  );
}

export default App;
