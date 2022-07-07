import React from "react"
import './Child.css'
// diffing  algorithm to prevent unnecessary re-rendering
// class Child extends React.Component{
//   componentDidUpdate(){
//     console.log("Child is updated")
//   }

//   shouldComponentUpdate(){
    
//     return false;
//   }
//   render(){
//     return (
//       <div>Child</div>
//     )
//   }
// }

const Child = ({handleClear}) => {
  return(
    <div>
      this is a child
      <div>
    <button onClick={handleClear}>clear</button>
    </div>
    </div>
  )
}

export default Child;