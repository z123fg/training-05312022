import React from 'react';

function Table1(props){
    const { data } = props;
    const fields = Object.keys(data[0]);
    const sums = data.reduce((prev, current) => {
        if(current.region in prev) {
            prev[current.region] += current.sales;
        } else {
            prev[current.region] = current.sales;
        }
        return prev;
    }, {})

    return(
        <table className="tabel-1__div">
            <thead>
              <tr>
                  {fields.map(field=><th key={field}>{field}</th>)}
              </tr>
            </thead>
            <tbody>
                {Object.keys(sums).map((region, index) => {
                    return(
                        <>
                           <tr key={index}>
                             <td>{region}</td>
                             <td>sum</td>
                             <td>{sums[region]}</td>
                           </tr>
                          
                           {data
                              .filter(data=>data.region === region) 
                              .map((data, index) => {
                                return(
                                       <tr key={index}>
                                         <td>{data.region}</td>
                                         <td>{data.model}</td>
                                         <td>{data.sales}</td>
                                       </tr>
                                      )
                           })}
                        </>
                    )
                })}
            </tbody>
            
        </table>
    )

}

export default Table1

// Note that If you forgot to provide the initial value (second parameter) to .reduce(), 
// it uses the first element of the array as the accumulator and starts at the second element.
