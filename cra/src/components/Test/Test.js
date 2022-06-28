
import React from "react";



/* 
  2019 january, React v16.8 released, introduced hooks, state management and lifecycle management
  before:
    function: stateless functional component
    stateful component, class component
  after:
    both class and functional component can be stateful
  
  state management


  life cycle method
    mounting
      constructor (updating stage)
      componentDidmount

    updating
      shouldComponentUpdate
      render
      componentDidUpdate

    destroying
      componentWillUnmount: clear subscription, clear  setTimeout, setInterval 
      prevent memory leak   



  event binding
  props
  
  const test = new Test(props)

*/

let interval;
class Test extends React.Component{

  constructor(props){
    super(props); // constructor of parent class
    const el = document.querySelector("#test")
    console.log(1, el);
    this.state = {
      name:"adam"
    }
    console.log("constructor this",this)
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    const el = document.querySelector("#test")
    console.log(2,el);

    interval = setInterval(()=>{
      console.log("this is from setInterval")
    },3000)
    
  }

  handleClick(){
    this.setState({name:"john"}); //async
    console.log("handleclick", this.state.name);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext){ //method
    console.log(3, this.state.name, nextState); // PureComponent
    return true;
  }

  componentDidUpdate(){
    console.log(4, this.state.name)
  }

  componentWillUnmount(){
    console.log(5);
    clearInterval(interval)
  }

  render(){
    const el = document.querySelector("#test")
    console.log(6,el, this.state.name)
    return (
      <div id="test" onClick={this.handleClick}>Hello {this.state.name} from Test component</div>
    )
  }
}

console.log("test class", new Test())

export default Test;