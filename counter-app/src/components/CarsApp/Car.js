import React from "react";

class Car extends React.Component {
  componentDidUpdate() {
    console.log(`${this.props.car.brand} updated`);
  }

  // shouldComponentUpdate(nextProps){ //our implementation
  //   //console.log(this.props.car.brand, this.props.car.number);
  //   /* if(this.props.car.number === nextProps.car.number){
  //     return false;
  //   } */
  //   return true;
  // }

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

  
  render() {
    const { brand, number } = this.props.car;
    return (
      <div style={{ width: "100px", height: "100px" }}>
        <div>{brand}</div>
        <div>{number}</div>
      </div>
    );
  }
}

export default Car;
