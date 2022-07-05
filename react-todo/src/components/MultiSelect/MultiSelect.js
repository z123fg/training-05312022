import React, { useState } from 'react'
import SelectItem from './SelectItem'
import './MultiSelect.css'
export default function MultiSelect({options, handleSelect}) {
    const [allSelected, setAllSelected] = useState(options.map(option=>option.selected).every(e=>e===true))

    const selectAll = (e)=>{
        var newState = options.map(option => {return {...option, selected: !allSelected}})
        setAllSelected(prev=>!prev)
        handleSelect(newState)
    }

    const selectOne = (e)=>{
        var itemIndex = options.findIndex(item=>{return item.id === parseInt(e.target.id)})
        var newState = options.map(option => {return {...option}})
        newState[itemIndex].selected = !options[itemIndex].selected
        handleSelect(newState);
    }

  return (
    <div className='select-container'>
       <div className='select-item'>
            <label
                className='select-item__label'
                id="Select_All"
                >  
            <input
            className='select-item__input'
            type="checkbox"
            id="Select_All"
            onChange={selectAll}
            checked={allSelected}   
            />
            Select All
            </label> 
       </div>
       {options.map((option, index)=>{
        return(
            <SelectItem  key={option.name + index} option={option} selectOne={selectOne}/>
          );
       })}
    </div>
  )
}
