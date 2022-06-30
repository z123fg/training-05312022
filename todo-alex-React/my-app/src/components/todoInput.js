import React from "react";

class TodoInput extends React.Component{
    render(){
        const {todoElement} = this.props;

        return(
            <input class = "input" onfocus="this.value=''"/>
        );
    }
}

export default TodoInput;