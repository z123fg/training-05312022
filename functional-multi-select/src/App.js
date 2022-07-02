import React, { useState } from 'react';
import './App.css';
import SelectionIndicator from './components/SelectionIndicator';
import List from './components/List';
import ClearAllControl from './components/ClearAllControl';

const INIT_DATA = [
  {
    id: 1,
    name: 'Kosher',
    selected: false
  },
  {
    id: 2,
    name: 'No Celery (inc celeriac)',
    selected: false
  },
  {
    id: 3,
    name: 'No Egg',
    selected: false
  }
]

function App() {
  const [data, setData] = useState(INIT_DATA);
  
  return (
    <div className="App">
      <SelectionIndicator data={data} />
      <List data={data} setData={setData} />
      <ClearAllControl data={data} setData={setData} />
    </div>
  );
}

export default App;
