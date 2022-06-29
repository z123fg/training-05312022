import React from "react";

/* 
  mutating the state; immutability
  trigger render cycle: change of state, change of props, forceUpdate
*/

class CounterApp extends React.Component {
  state = { counter: 0 };

  handleIncrement = () => {
    console.log(this);
    /*  this.state.counter++;//anti-pattern
    this.forceUpdate(); */

    this.setState({ counter: this.state.counter + 1 });//batch up
    console.log("state1", this.state.counter);//0
    //this.setState({ counter: this.state.counter + 1 });

    /* 
      const foo = ()=>({value:1});
      const foo = () => {return 1}
    
    */
    //this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    //console.log("state2", this.state.counter);//0
    this.setState((prevState) => {
      console.log("state2", prevState.counter);//1
      return {
        counter: prevState.counter + 1
      }
    });
  };



  handleDecrement = () => {
    this.state.counter--;
  };

  render() {
    console.log("state3", this.state.counter)
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
      </div>
    );
  }
}

export default CounterApp;
