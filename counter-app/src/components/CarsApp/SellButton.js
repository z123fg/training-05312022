import React from "react";


class SellButton extends React.Component{
   render(){
    const {brand, handleSellCar} = this.props
    return (
      <div style={{width:"100px",height:"100px"}}>
              <button onClick={handleSellCar}>{`sell ${brand}`}</button>
            </div>
    )
   } 
}

export default SellButton