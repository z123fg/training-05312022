import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <div className="App">
      <button onClick={()=>{setShowCounter(prev=>!prev)}}>destroy counter</button>
      {showCounter&&<Counter/>}
    </div>
  );
}

export default App;
