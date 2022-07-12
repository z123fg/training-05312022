import React from "react";
import Car from "./Car";
import SellButton from "./SellButton";

/* 
  uuid: universally unique identifier
  guid: globally unique identifier

  immutability: update state by creating new obj(nested)
  mutate: change the property of a obj without creating a new one

  shouldComponentUpdate
  PureComponent

  HOC: higher order component, reuse logic for class component, reuse state management and life cycle logic
  react router: withRouter(hoc)
  react redux: connect(function return another hoc)
  hoc hell: drawbacks of hoc

  analytic

*/


class CarsApp extends React.Component {

 
  state = {
    dealer: "goodcar",
    cars: {
      sedan: [
        {
          id: 1,
          brand: "toyota",
          number: 8,
        },
        {
          id: 2,
          brand: "ford",
          number: 5,
        },
        {
          id: 3,
          brand: "bmw",
          number: 10,
        },
      ],
    },
  };
 constructor(props){
  super(props);
  console.log(document.querySelectorAll(".counter"));//[]
  console.log(document.getElementsByClassName("counter"));//[div]
 }
  handleSellCar = (id) => {
    //update the state
    console.log("sell", id);
    //this.state.cars.find(car=>car.id === id).number--;
    // const sedan = [...this.state.car.sedan];

    // console.log(sedan[0]=== this.state.cars.sedan[0]);

    // const newCars = sedan.map((car, index) => {
    //   console.log(car === this.state.cars.sedan[index])//false
    //   if (car.id === id) {
    //     car.number--;
    //   }
    //   return car;
    // });
    // this.setState({cars:{sedan:newCars}})
    /*  let obj = {info:{name:"adam", age:18}};
    obj.info = {name:"john",age:20}; //mutation

    obj = {...obj,info:{name:"john", age:20}}//immutable
    
    this.state.cars.sedan[1] = {brand:"benz", number:2} */

    /* const newState = {...this.state};
    newState.cars.sedan.find(car=>car.id === id).number = newState.cars.sedan.find(car=>car.id === id).number - 1;
    this.setState(newState); */
    /*  const nextState = JSON.parse(JSON.stringify(this.state));//hack deep copy
    nextState.cars.sedan.find(car=>car.id === id).number--;
    this.setState(nextState) */

    // const nextState = {...this.state};
    // nextState.cars = {...this.state.cars};
    // nextState.cars.sedan = [...this.state.cars.sedan];
    // const index = nextState.cars.sedan.findIndex(car=>car.id === id);
    // nextState.cars.sedan[index] = {...this.state.cars.sedan[index], number: this.state.cars.sedan[index].number - 1}
    // this.setState(nextState);

    /*   this.setState(prev=>{
      prev.cars.sedan[0].number--;
      return prev
    }) */

    let a  = 1;
    //let b = a--;
    let b = a;
    a = a - 1
    
    this.setState((prev) => {
      const index = prev.cars.sedan.findIndex((car) => car.id === id);
      return {
        ...prev,
        cars: {
          ...prev.cars,
          sedan: [
            ...prev.cars.sedan.slice(0, index),
            {
              ...prev.cars.sedan[index],
              number: prev.cars.sedan[index].number - 1,
            },
            ...prev.cars.sedan.slice(index+1),
          ],
        },
      };
    });
  };

  render() {
    return (
      <div className="counter">
        <span>{this.state.dealer}</span>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          {this.state.cars.sedan.map((car) => {
            return <Car key={car.id} car={car}/>;
          })}
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          {this.state.cars.sedan.map((car) => {
            return (
              <SellButton
                key={car.id}
                handleSellCar={(e) => {
                  this.handleSellCar(car.id);
                }}
                brand={car.brand}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CarsApp;
