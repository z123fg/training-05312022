import React from "react"

class Child extends React.Component{
  componentDidUpdate(){
    console.log("Child is updated")
  }
  render(){
    return (
      <div>Child</div>
    )
  }
}

export default Child;