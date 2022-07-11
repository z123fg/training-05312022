import React from "react";
import DisplayData from "./DisplayData";
import "./TeslaData.css"

const TeslaData = () =>{
    const data = [
        {
          region: "US",
          model: "A",
          sales: 150
        },
        {
          region: "US",
          model: "B",
          sales: 120
        },
        {
          region: "US",
          model: "C",
          sales: 350
        },
        {
          region: "EU",
          model: "A",
          sales: 200
        },
        {
          region: "EU",
          model: "B",
          sales: 100
        },
        {
          region: "EU",
          model: "C",
          sales: 250
        },
        {
          region: "CA",
          model: "A",
          sales: 200
        },
        {
          region: "CA",
          model: "B",
          sales: 100
        },
        {
          region: "CA",
          model: "C",
          sales: 230
        },
        {
          region: "CA",
          model: "D",
          sales: 400
        }
      ]

    //   const size = data.length;
    //   const testString = `The data size is ${size}`
    //   const dataTest = data[1].sales;


    return(
        <>
        <table>
            <DisplayData data={data} />
        </table>
        </>
    );
}

export default TeslaData;