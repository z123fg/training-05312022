import logo from "./logo.svg";
import "./App.css";
import CounterApp from "./components/CounterApp/CounterApp";
import CounterBoard from "./components/CounterApp2/CounterBoard";
import ButtonGroup from "./components/CounterApp2/ButtonGroup/ButtonGroup";
import React from "react";
import Child from "./components/CounterApp2/Child";
import CarsApp from "./components/CarsApp/CarsApp";
//decoupling

/* 
  obj or instance of class:
    arrow function: 'this' is the same as the 'this' outside of the arrow function
    regular function: the obj who invoke the function

  class:
    regular method: 'this' is going to be the obj that invoke this method;
    arrow function method: 'this' is going to be the instance of the class all the time;
*/

/* 

  console.log(this);

  const obj = {
    name:"adam",
    arrowFunction: () => {
      console.log("1",this.name); //undefined
    },
    regularFunction: function(){
      console.log("2",this.name); //adam
    }

  }

  obj.arrowFunction();
  obj.regularFunction();

*/


class App extends React.Component {
  state = {
    counter: 0,
  };

  /* handleIncrement(){

  } */
 
  test = () => {
    console.log("test this", this);
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });

  };

  render() {
    return (
      <div className="App">
         {/* <CounterApp/> */}
        <CounterBoard counter={this.state.counter}/>
        <ButtonGroup handleDecrement={this.handleDecrement} handleIncrement={this.handleIncrement}/>
        <Child/>
        {/* <CarsApp/> */}
      </div>
    );
  }
}

/* 
  const app = new App();
  const obj = {
    name:"adam",
    fun:app.test,
  }
  obj.fun(); 
*/



export default App;
