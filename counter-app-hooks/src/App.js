import logo from "./logo.svg";
import "./App.css";
import CounterBoard from "./components/CounterApp2/CounterBoard";
import ButtonGroup from "./components/CounterApp2/ButtonGroup/ButtonGroup";
import { useState } from "react";
import Child from "./components/CounterApp2/Child";
import { dispatch, getState, subscribe } from "./redux/redux";


/* 
  redux: global state management tool
  redux core
  react redux
  react redux toolkit(RTK)

*/


function App() {
 
  return (
    <div className="App">
      this is app
      <div className="counter-app">
        this is counter app
        <CounterBoard/>
        <ButtonGroup
        />
        <Child />
      </div>
    </div>
  );
}

export default App;
