import { useState } from 'react';
import './App.css';

function App() {
  const [options, setOptions] = useState([
    {
      id: 1,
      value: "Kosher",
      selected: false
    },
    {
      id: 2,
      value: "No Celery(inc celeriac)",
      selected: false
    },
    {
      id: 3,
      value: "No Egg",
      selected: false
    }
  ]);

  const handleSelectAll = () =>{
    // check if every option selected
    const all = options.map((option) => option.selected).every(selected => selected);
    setOptions((prevOptions) => 
      prevOptions.map(option => ({...option, selected: !all}))
    )
  }

  const handleOnChange = (value) => {
    // check 
    const valueIndex = options.findIndex(option => option.value === value);
    setOptions((prevOptions) => [
      ...prevOptions.slice(0, valueIndex),
      { ...prevOptions[valueIndex], selected: !prevOptions[valueIndex].selected},
      ...prevOptions.slice(valueIndex+1),
    ])
  }

  const handleClearAll = () => {
    setOptions((prevOptions) => prevOptions.map(option => ({...option, selected: false})))
  }

  return (
    <div className="App">
      <div className="select__container">
        {/* selected value text */}
        <div className="select__span">
          <span>Selected Value: {options.filter(option => option.selected === true).map(option => option.value).join(", ")}  </span>
        </div>
        {/* options div */}
        <div className="select__inputs__div">
          <label>
            <input 
            className="select__input"
            type="checkbox" 
            value="Select All" 
            checked={options.map((option) => option.selected).every((s) => s)} 
            onChange={()=>{handleSelectAll()}}/> Select All
            </label>
          {options.map(option => (
            <label key={option.id}>
              <input 
                className="select__input"
                type="checkbox" 
                value={option.value} 
                checked ={option.selected}
                onChange = {()=> {handleOnChange(option.value)}}
              /> {option.value}
            </label>
          ))}
        </div>
        {/* Clear button */}
        <button className="clear__button" type="button" onClick={handleClearAll}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
