import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Test from './components/Test';
import MyButton from './components/MyButton/MyButton';

function App() {
  return (
    <div className="App">
      <MyButton onClick={()=>{console.log("clicked")}} color="secondary" variant="outlined">submit</MyButton>
    </div>
  );
}

export default App;
