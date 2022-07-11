import React, { useState } from 'react';

const Table2 = (props) => {
    const [ region, setRegion ] = useState("");
    const [ model, setModel ] = useState("");

    const { data } = props;
    const fields = Object.keys(data[0]);

    // needs refactor
    // should not hard code these two arrays
    // const regions = ["US", "EU", "CA"];
    // const models = ["A", "B", "C", "D"];

    // The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
    // The Set object lets you store unique values of any type, whether primitive values or object references.
    const regions = Array.from(new Set(data.map(data => data.region)));
    const models = Array.from(new Set(data.map(data => data.model))); 

    const handleRegionChange = (e) => {
        setRegion(e.target.value)
    }

    const handleModelChange = (e) => {
        setModel(e.target.value)
    }

    return(
        <>
            <div className="filter__div">
                <label htmlFor="region">
                    <select 
                      id="region" 
                      name="region"
                      onChange={handleRegionChange}
                      value={region}
                      >
                        <option value="">All</option>
                        {regions.map(region => <option key={region} value={region}>{region}</option>)}
                    </select>
                    Region Filter
                </label>
                
                <label htmlFor="model">
                    <select
                      name="model"
                      id="model"
                      onChange={handleModelChange}
                      value={model}
                    >
                        <option value="">All</option>
                        {models.map(model => <option key={model} value={model}>{model}</option>)}
                    </select>
                    Model Filter
                </label>
            </div>

            <table>
                <thead>
                    <tr>
                        {fields.map(field => <th key={field}>{field}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data
                      .filter(data => (region.length > 0 ? data.region === region : data))
                      .filter(data => (model.length > 0 ? data.model === model : data))
                      .map((data, index) => {
                        return (
                            <>
                              <tr key={index}>
                                <td>{data.region}</td>
                                <td>{data.model}</td>
                                <td>{data.sales}</td>
                              </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table2

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// The Set object lets you store unique values of any type, whether primitive values or object references.