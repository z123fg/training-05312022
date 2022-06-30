import React from "react";


/* 
  two way binding: mvvm, decoupling
  event target: the element that emit the event
  event currentTarget: the element that receive the event

  synthetic event: wrapper of native, browser compatibility
*/
class TwoWayBindingDemo extends React.Component {
  state = {
    value:""
  }

 /*  handleChange(e){
    console.log(this)
    console.log("onChange", e, e.target, e.currentTarget);// input, input
  } */

  handleChange = (e) => {
    this.setState({value:e.target.value})
    
    //console.log("onChange", e, e.target, e.currentTarget);// input, input
  }

  componentDidUpdate(){
    console.log("didUpdate",this.state.value)
  }

  /* handleFormChange = (e) => {
    console.log("normal function",this.state)
    //console.log("formChange", e, e.target, e.currentTarget);//input, form
  } */
  render() {
    return (
      <form onChange={this.handleFormChange}>
        <input onChange={this.handleChange} value={this.state.value}/>
       {/*  <input type="checkbox" />
        <input type="radio" />
        <input type="date" />
        <input type="datetime-local" />
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select> */}
      </form>
    );
  }
}

export default TwoWayBindingDemo;
