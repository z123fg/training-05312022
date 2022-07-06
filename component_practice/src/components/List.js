import React, {useState} from "react";

function List(){

    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

        return(
            <>
            <div className="App_top">
          <p>Selected Value: </p>
            </div>
            <br/>
            <label class="checkbox"  id ="c">
            <input type="checkbox" 
            checked={checked} checked2={checked2} checked3={checked3} 
            onChange={(e,f,g) => [setChecked(e.target.checked),
            setChecked2(f.target.checked2),
            setChecked3(g.target.checked3)]} id="c1"/>
            <label for="c1">Select All</label>
            <br/><br/>
            <input  type="checkbox" 
            checked={checked} onChange ={(e)=> setChecked(e.target.checked)} 
            id="c2"/>
            <label for="c2">Kosher</label>
            <br/><br/>
            <input type="checkbox" checked2={checked2} onChange ={(e)=> setChecked2(e.target.checked2)}id="c3"/>
            <label for="c3">No Celery</label>
            <br/><br/>
            <input type="checkbox" checked3={checked} onChange ={(e)=> setChecked3(e.target.checked3)}id="c4"/>
            <label for="c4">No Egg</label>
            <br/><br/>
            </label>
            <button onClick={() => 
              [setChecked((c) => !c), 
              setChecked2((c) => !c),
              setChecked3((c) => !c)]} 
              checked={checked} checked2={checked2} checked3={checked3} 
              onChange={(e,f,g) => [setChecked(e.target.checked),
                setChecked2(f.target.checked2),
                setChecked3(g.target.checked3)]}>clear all</button>
            </>
        );
}

export default List;