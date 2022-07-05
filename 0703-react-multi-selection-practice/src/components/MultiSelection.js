import React, { useState } from 'react';

function MultiSelection(){
    const [options, setOptions ] = useState([
        {
            name: "Kosher",
            id: 1,
            selected: false
        },
        {
            name: "No Celery (inc celeriac)",
            id: 2,
            selected: false
        },
        {
            name: "No Egg",
            id: 3,
            selected: false
        }

    ])

    // console.log(options)


    function handleSeletectAll(){
        
        setOptions(prevState => {
                return prevState.map((option) => ({...option, selected: !isSelectedAll}))
        })

    }

    function handleSelectedChanged(event){
        const idx = options.findIndex(option => option.name === event.target.parentElement.id)
        setOptions(prevState=>[
            ...prevState.slice(0, idx), {...prevState[idx], selected: !prevState[idx].selected}, ...prevState.slice(idx + 1)
        ])
    }

    function handleClearClick(){
        setOptions(prevState => {
            return prevState.map((option)=>({...option, selected: false}))
        })
    }



    const displayOptions = options.map((option) => {
        return(
            <label key={option.id} id={option.name}>
                <input type="checkbox" checked={option.selected} onChange={handleSelectedChanged} />
                {option.name}
            </label>
        )
    })

    // The every() method tests whether all elements in the array pass the test implemented by the provided function. 
    // The every() method returns a Boolean value.
    const isSelectedAll = options.map((option) => option.selected).every((selected) => selected);

    const displayItems = options.filter(option=>option.selected)
    const displayNames = displayItems.map(item=>item.name)
 
    return(
        <div className="selection__container">
            <p className="alert">Selected Value: {displayNames.join(", ")}</p>
            <div className="select-items">
              <label>
                <input type="checkbox" checked={isSelectedAll} onChange={handleSeletectAll} />  
                Select All
              </label>  
              
              {displayOptions}
            </div>
            <button className="btn--clear" onClick={handleClearClick}>Clear All</button>
        </div>
    )

}

export default MultiSelection;