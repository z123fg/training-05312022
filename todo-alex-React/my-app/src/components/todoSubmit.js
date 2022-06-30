import React from "react";

class TodoSubmit extends React.Component{
    render(){
        const {todoElement} = this.props;

        return(
            <button class = "btn--done" onClick={todoElement}>Submit</button>
        )
    }


}

export default TodoSubmit