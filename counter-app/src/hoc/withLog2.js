import React from "react";



function withLog2 (WrappedComponent){
  return class extends React.Component{

    state = {
      counter: 1,
    }

    shouldComponentUpdate(nextProps) {
      //pureComponent
      /*  if(this.props.car === nextProps.car){
        return false
      } */
      if (
        Object.entries(this.props).every(([key, value]) => {
          return value === nextProps[key];
        })
      ) {
        return false;
      }
      return true;
    }


    componentDidUpdate(){
      this.setState({counter:this.state.counter + 1})
      console.log(this.props.car.brand, "has changed, the number is: ",this.props.car.number);
      console.log("the counter is: ",this.state.counter)
    }
    render(){
      return <WrappedComponent {...this.props}/>
    }
  }
}

export default withLog2;