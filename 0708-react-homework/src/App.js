import data from './data';
import './App.css';
import Table1 from './components/Table1';
import Table2 from './components/Table2';

function App() {
  return (
    <div className="App">
        <Table1 data={data} />
        <br />
        <Table2 data={data} />
    </div>
  );
}

export default App;
