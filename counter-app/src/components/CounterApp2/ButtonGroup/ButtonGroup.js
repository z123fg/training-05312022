import React from "react";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";

class ButtonGroup extends React.Component {

  render() {
    const {handleIncrement, handleDecrement} = this.props;
    return (
      <>
        <DecrementButton handleDecrement={handleDecrement}/>
        <IncrementButton handleIncrement={handleIncrement}/>
      </>
    );
  }
}

console.log("fragment",<></>)



export default ButtonGroup;
