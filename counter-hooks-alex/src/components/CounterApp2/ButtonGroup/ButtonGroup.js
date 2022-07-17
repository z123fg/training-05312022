import React from "react";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";
import "./ButtonGroup"

const ButtonGroup = ()=> {

    return (
      <div className="button-group">
        This is a button group
      <div>
        <DecrementButton />
        <IncrementButton />
      </div>
      </div>
    );
}

console.log("fragment",<></>)



export default ButtonGroup;
