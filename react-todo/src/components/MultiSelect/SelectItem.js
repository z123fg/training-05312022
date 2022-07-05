import React from 'react'
import "./SelectItem.css"
export default function SelectItem({option, selectOne}) {
  return (
    <div className='select-item'>
        <label
        className='select-item__label'
        id={option.name}
        >
        <input
        className='select-item__input'
        type="checkbox"
        id={option.id}
        onChange={selectOne}
        checked={option.selected}   
        />
        {option.name}
        </label>
    </div>
  )
}
