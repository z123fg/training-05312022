import React from "react";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";

const ButtonGroup = ({counter} )=> {

    return (
      <div>
        This is a button group
      <div>
        <DecrementButton handleDecrement={handleDecrement}/>
        <IncrementButton handleIncrement={handleIncrement}/>
      </div>
      </div>
    );
}

console.log("fragment",<></>)



export default ButtonGroup;
