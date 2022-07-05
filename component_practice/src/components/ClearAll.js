import React, {useState} from "react";

function ClearAll(){
        const listElement = this.props;
        const [setCheck] = useState(false);

        return(
            <>
            <button onClick={() => setCheck((c) => !c)}>Clear all</button>
            </>
        )
}

export default ClearAll;