import React, { Component } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

class Todo extends Component {
    state = {
        newTitle: this.props.todo.title
    }

    handleChange = (e) => {
        e.preventDefault();
        if (this.props.todo.complete === true) {
            this.setState({ newTitle: this.props.todo.title });
        } else {
            this.props.todo.title = "";
            this.setState({ newTitle: e.target.value })
        }
    };

    render() {
        const { todo, toggleComplete, handleDelete, handleEdit } = this.props
        return (
            <div className="todo">
                <input
                    style={{ textDecoration: todo.completed && "line-through" }}
                    type="text"
                    value={todo.title === "" ? this.state.newTitle : todo.title}
                    className="list"
                    onChange={this.handleChange}
                />
                <div>
                    <button
                        className="button-complete"
                        onClick={() => toggleComplete(todo)}
                    >
                        <CheckCircleIcon id="i" />
                    </button>
                    <button
                        className="button-edit"
                        onClick={() => handleEdit(todo, this.state.newTitle)}
                    >
                        <EditIcon id="i" />
                    </button>
                    <button className="button-delete" onClick={() => handleDelete(todo.id)}>
                        <DeleteIcon id="i" />
                    </button>
                </div>
            </div>
        );
    }

}

export default Todo;