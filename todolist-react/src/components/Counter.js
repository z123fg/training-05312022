import React, { useEffect, useState } from "react";


/* 
  hooks: for reusing lifecycle management and state management logic
  basic hooks: useState(state), useEffect(lifecycle)
  state management:
  lifecycle:
  event binding:
  props:

*/

function Counter (props){
  let [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(()=>{ //side effect anything not directly related to this component
    //onsole.log("useEffect", counter);//1 or 0
    //console.log(document.querySelector("#counter"));//div
    console.log("componentDidMount")
  },[]);//componentDidMount

  useEffect(()=>{
    console.log("componentDidMount + componentDidUpdate");
  });//componentDidMount + componentDidUpdate

  useEffect(()=>{
    //const timeout = setInterval(()=>{console.log("interval")}, 1000)
    return ()=>{ //componentWillUnmount
      console.log("componentWillUnmount")
      //clearTimeout(timeout)
    }
  },[]);


  useEffect(()=>{
    console.log("toggle change", toggle);
  },[toggle])



  const handleIncrement = () => {
    setCounter(prev=>{
      console.log(prev, counter);
      return prev+1
    })
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <button onClick={()=>setToggle(prev=>!prev)}>toggle</button>
      <div id="counter">{counter}</div>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  )
}

export default Counter;

