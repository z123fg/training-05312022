import { useState } from 'react';
import './App.css';
import MultiSelect from './components/MultiSelect/MultiSelect';

function App() {
  const [options, setOptions] = useState([
    {
      name: "Kosher",
      selected: false,
      id:10
    },
    {
      name: "No Celery (inc celeriac)",
      selected: false,
      id:11
    },
    {
      name: "No Egg",
      selected: false,
      id:12
    }
  ])  
  
  const handleSelect = (newState)=>{setOptions(newState);  }

  return (
    <div className="App">
      <MultiSelect options={options} handleSelect={handleSelect} />
    </div>
  );
}

export default App;
