import React from "react";

const DisplayData = ({data}) =>{
    //let template = "";
    //console.log(data.length);
    // console.log(data[0].region);
    // console.log(data[0].model);
    // console.log(data[0].sales);

    // for(var i = 0; i < data.length; i++)
    // {
    //     const region = data[i].region;
    //     const model = data[i].model;
    //     const sales = data[i].sales;

    //     // console.log(region);
    //     // console.log(model);
    //     // console.log(sales);

    //     // template += `
    //     //     ${region} ${model} ${sales}`;



    //     template +=[
    //         `${region} ${model} ${sales}`];
        
    // }

    // console.log(template.length);

    const sumOfRegion = data.reduce((prev, curr) =>{
        if (curr.region in prev) {
            prev[curr.region] += curr.sales;
        }
        else {
            prev[curr.region] = curr.sales;
        }
        return prev;
    }, {})

    return(
        <>
            <table>
            <td>region</td>
            <td>model</td>
            <td>sales</td>
                {data.map((pointer) =>{
                    return(
                    <>
                    <tr>
                        <td>{pointer.region} </td>
                        <td>{pointer.model} </td>
                        <td>{pointer.sales}</td>
                    </tr>
                    </>
                    );
                })}
                {Object.keys(sumOfRegion).map((region) => {
                    return(
                        <tr>
                            <td>{region}</td>
                            <td>sum</td>
                            <td>{sumOfRegion[region]}</td>
                        </tr>
                    );
                })}
            </table>
        </>
    );
  };

  export default DisplayData;