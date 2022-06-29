import React from "react";


class IncrementButton extends React.Component{
  render(){
    const {handleIncrement} = this.props;

    return (
      <button onClick={handleIncrement}>increment</button>
    )
  }
}

export default IncrementButton;