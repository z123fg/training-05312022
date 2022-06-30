import React from 'react';

class TodoForm extends React.Component {
    state = {
        content: "",
        isComplete: false,
        isEdit: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = this.state
        
        // make a http request
        const url = "http://localhost:5000/todos";
        const configObj = {
            method: "POST",
            headers: {
                "COntent-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(newTodo)
        }
        fetch(url, configObj)
          .then(res => res.json())
          .then(data => this.props.addNewTodo(data))

          this.setState({
            content: "",
            isComplete: false,
            isEdit: false
        })  
    }

    handleOnChange = (e) => {
        this.setState({
            content: e.target.value,
            isComplete: false,
            isEdit: false
        })
    }

    render(){
        return(
            <form className="todo__form" onSubmit={this.handleSubmit}>
                <input type="text" name="content" placeholder="Add a todo..." onChange={this.handleOnChange} value={this.state.content} />
                <button type="submit" className="btn--submit">Submit</button>
            </form>
        )
    }

}

export default TodoForm;