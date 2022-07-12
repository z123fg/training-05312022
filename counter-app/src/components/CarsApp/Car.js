import React from "react";
import withLog from "../../hoc/withLog";
import withLog2 from "../../hoc/withLog2";

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

export default withLog2(withLog2(withLog2(withLog(Car))));
