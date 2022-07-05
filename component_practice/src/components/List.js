import React, {useState} from "react";

function ClearAll() {
    const [setChecked] = useState(false);

    return (
        <>
        <button onClick={() => setChecked((c) => !c)}>Clear all</button>
        </>
    )
}

class List extends React.Component{

    render(){
        const {listElement} = this.props;
        return(
            <>
            <label class="checkbox" id ="c">
            <input type="checkbox" id="c1"/>
            <label for="c1">Thing 1</label>
            <br/><br/>
            <input type="checkbox" id="c2"/>
            <label for="c2">Thing 2</label>
            <br/><br/>
            <input type="checkbox" id="c3"/>
            <label for="c3">Thing 3</label>
            <br/><br/>
            <input type="checkbox" id="c4"/>
            <label for="c4">Thing 4</label>
            <br/><br/>
            </label>
            <ClearAll/>
            </>
        );
    }
}

export default List;