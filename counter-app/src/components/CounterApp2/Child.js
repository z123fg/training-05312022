import React from "react"
// diffing  algorithm to prevent unnecessary re-rendering
class Child extends React.Component{
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
}

export default Child;