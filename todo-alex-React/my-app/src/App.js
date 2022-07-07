import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './components/todoList'

function App() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;