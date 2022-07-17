import React from "react"
import './Child.css'
import { useDispatch } from "react-redux"
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

const Child = () => {
  const dispatch = useDispatch()
  const handleClear = () => {
    dispatch ({type:"COUNTER/PUSHARR",payload:1})
  }
  return(
    <div className="child">
      this is a child
      <div>
      <button onClick={handleClear}>clear</button>
    </div>
    </div>
  );
};

export default Child;