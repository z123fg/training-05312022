import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import Todolist from './components/Todolist/Todolist';

function App() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <div className="App">
      {/* <button onClick={()=>{setShowCounter(prev=>!prev)}}>destroy counter</button>
      {showCounter&&<Counter/>} */}
      <Todolist/>
    </div>
  );
}

export default App;
