import React from "react";

/* 
  Uni-directional data flow: only from parent to child, easier to trace bug, maintainable, decoupling
  state lifting(props drilling): drawback
*/
class CounterBoard extends React.Component{

  render(){
    const {counter} = this.props
    return (
      <div>{counter}</div>
    )
  }
}

export default CounterBoard;