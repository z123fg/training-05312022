import React from "react";
import TodoSubmit from "./todoSubmit"

class TodoInput extends React.Component{
    render(){
        const {todoElement} = this.props;

        return(
            <>
                <input class = "input" onfocus="this.value=''"/>
                <TodoSubmit todoElement ={this.todoElement}/>
            </>
        );
    }
}

export default TodoInput;