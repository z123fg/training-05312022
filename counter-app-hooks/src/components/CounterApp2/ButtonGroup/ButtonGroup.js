import React from "react";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";
import "./ButtonGroup.css"


const ButtonGroup = () => {
  return (
    <div className="button-group">
      this is button group
      <div>
        <DecrementButton />
        <IncrementButton />
      </div>
        
      </div>
  )
}



export default ButtonGroup;
