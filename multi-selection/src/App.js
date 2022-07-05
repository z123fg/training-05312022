import React, { useState, useEffect } from 'react';
import './App.css';
import Checkbox from '@mui/material/Checkbox';

function App() {
  const [options, setOptions] = useState([
    { option: 'Kosher', checked: false },
    { option: 'No Celery (inc celeriac)', checked: false },
    { option: 'No Egg', checked: false },
  ])
  const [allChecked, setAllChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState([])

  const handleSelectAll = () => {
    setAllChecked(!allChecked);
    const allOptionsChecked = options.map((option) => option.checked).every((check) => check);
    setOptions((prev) => prev.map((option) => ({ ...option, checked: !allOptionsChecked })));
  }

  const handleDisplayValue = (e) => {
    let index = parseInt(e.target.value);
    options[index].checked = !options[index].checked
    setOptions([...options])

    if (options[index].checked === false) {
      setAllChecked(false)
    }

    if (!selectedValue.includes(options[index].option)) {
      setSelectedValue([...selectedValue, options[index].option])
    }

    if (options[index].checked === false) {
      let option = options[index].option;
      let filteredSelections = selectedValue.filter((val, i) => {
        return val !== option;
      })

      setSelectedValue([...filteredSelections]);
    }
  }

  const handleUncheckAll = () => {
    setOptions((prev) => prev.map((option) => ({ ...option, checked: false })));
    setAllChecked(false);
    setSelectedValue([]);
  }

  useEffect(() => {
    const allOptionsUnchecked = options.map((option) => option.checked).every((check) => !check);
    if (allChecked === false && allOptionsUnchecked) setSelectedValue([''])
    if (allChecked === true) {
      setOptions((prev) => prev.map((option) => ({ ...option, checked: true })));
      setSelectedValue(['Kosher', 'No Celery (inc celeriac)', 'No Egg'])
    }
  }, [allChecked])

  useEffect(() => {
    const allChecked = options.map((option) => option.checked).every((check) => check);
    if (allChecked) setAllChecked(true);
  }, [selectedValue])



  return (
    <>
      <div className='outerContainer'>
        <div className='innerContainer'>
          <div className="selectedValue">Selected Value: {selectedValue.join(" ")}</div>
          <br />
          <label className='selectAll'>
            Select All
            <Checkbox
              type="checkbox"
              value="Select All"
              checked={allChecked}
              onChange={handleSelectAll}
              sx={{
                color: 'green',
                '&.Mui-checked': {
                  color: 'green',
                },
              }}
            />
          </label>
          {
            options.map((option, index) => {
              return (
                <div key={index} className='options'>
                  <label className='container'>
                    <Checkbox
                      type="checkbox"
                      value={index}
                      checked={option.checked}
                      onChange={handleDisplayValue}
                      sx={{
                        color: 'green',
                        '&.Mui-checked': {
                          color: 'green',
                        },
                      }}
                    />
                  </label>
                  {option.option}
                </div>
              )
            })
          }
          <button className="clear-button" onClick={handleUncheckAll}>Clear All</button>
        </div>
      </div>
    </>
  );
}

export default App;


