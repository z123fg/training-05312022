import logo from "./logo.svg";
import "./App.css";
import CounterApp from "./components/CounterApp/CounterApp";
import CounterBoard from "./components/CounterApp2/CounterBoard";
import ButtonGroup from "./components/CounterApp2/ButtonGroup/ButtonGroup";
import React from "react";
import Child from "./components/CounterApp2/Child";
//decoupling
class App extends React.Component {
  state = {
    counter: 0,
  };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });

  };

  render() {
    return (
      <div className="App">
        {/*  <CounterApp/> */}
        <CounterBoard counter={this.state.counter}/>
        <ButtonGroup handleDecrement={this.handleDecrement} handleIncrement={this.handleIncrement}/>
        <Child/>
      </div>
    );
  }
}

export default App;
