import React from "react";
import { dispatch } from "../../redux/redux";
// diffing  algorithm to prevent unnecessary re-rendering
/* class Child extends React.Component{
  componentDidUpdate(){
    console.log("Child is updated")
  }

  shouldComponentUpdate(){
    
    return false;
  }
  render(){
    return (
      <div>Child</div>
    )
  }
} */

import "./Child.css"

const Child = () => {
  const handleClear = () => {
    dispatch({type:"COUNTER/CLEAR"})
  }
  return (
    <div className="child">
      this is Child
      <div>
        <button onClick={handleClear}>clear</button>
      </div>
    </div>
  );
};

export default Child;
