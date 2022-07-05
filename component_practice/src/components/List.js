import React, {useState} from "react";

function List(){

    const [checked, setChecked] = useState(false);

        return(
            <>
            <div className="App_top">
          <p>Selected Value: </p>
            </div>
            <br/>
            <label class="checkbox"  id ="c">
            <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)} id="c1"/>
            <label for="c1">Thing 1</label>
            <br/><br/>
            <input type="checkbox" onChange={(e) => setChecked(e.target.checked)}id="c2"/>
            <label for="c2">Thing 2</label>
            <br/><br/>
            <input type="checkbox" onChange={(e) => setChecked(e.target.checked)}id="c3"/>
            <label for="c3">Thing 3</label>
            <br/><br/>
            <input type="checkbox" onChange={(e) => setChecked(e.target.checked)}id="c4"/>
            <label for="c4">Thing 4</label>
            <br/><br/>
            </label>
            <button onClick={() => setChecked((c) => !c)}>clear all</button>
            </>
        );
}

export default List;