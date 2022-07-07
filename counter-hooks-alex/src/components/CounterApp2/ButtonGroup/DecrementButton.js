import React from "react";


class DecrementButton extends React.Component{
  render(){
    const {handleDecrement} = this.props;

    return (
      <button onClick={handleDecrement}>decrement</button>
    ) 
  }
}

export default DecrementButton;