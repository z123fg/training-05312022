import React, { useState, useEffect } from 'react';

export default function TableTwo({ data }) {
    const [regionOptions, setRegionOptions] = useState([])
    const [selectedRegion, setSelectedRegion] = useState("All")
    const [modelOptions, setModelOptions] = useState([])
    const [selectedModel, setSelectedModel] = useState("All")

    useEffect(() => {
        const allRegions = data.map(row => row.region)
        const uniqueRegions = ['All', ...new Set(allRegions)]
        setRegionOptions(uniqueRegions)
        const allModels = data.map(row => row.model);
        const uniqueModels = ['All', ...new Set(allModels)]
        setModelOptions(uniqueModels)
    }, [])

    const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value)
    }

    const handleModelChange = (e) => {
        setSelectedModel(e.target.value)
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <label htmlFor="">Region Filter</label>
                <select value={selectedRegion} onChange={handleRegionChange}>
                    {
                        regionOptions.map((region, i) => {
                            return <option value={region} key={i}>{region}</option>
                        })
                    }
                </select>

                <label htmlFor="">Model Filter</label>
                <select value={selectedModel} onChange={handleModelChange}>
                    {
                        modelOptions.map((model, i) => {
                            return <option value={model} key={i}>{model}</option>
                        })
                    }
                </select>
            </div>
            <div className='table__container'>
                <table>
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key, i) => (
                                <th key={i}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.filter((row) => {
                                if (selectedRegion === 'All' && selectedModel === 'All') {
                                    return row;
                                } else
                                    if (selectedRegion === 'All' && selectedModel !== 'All') {
                                        return row.model === selectedModel;
                                    } else
                                        if (selectedRegion !== 'All' && selectedModel === 'All') {
                                            return row.region === selectedRegion;
                                        } else
                                            return row.region === selectedRegion && row.model === selectedModel;

                            }).map((el, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{el.region}</td>
                                        <td>{el.model}</td>
                                        <td>{el.sales}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};




