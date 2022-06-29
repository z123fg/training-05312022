/**
 * Author: Quan Gan
 * Purpose: create a todo list page.
 */

import React from "react";
import "../css/style.css";

// The SVG images
const EDITICON = <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>;
const DELETEICON = <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>;

const URL = "http://localhost:3000/todos";

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            input: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handdleToggle = this.handdleToggle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleInputEdit = this.handleInputEdit.bind(this);
    }

    // Get the initial state from endpoint
    componentDidMount() {
        fetch(URL)
            .then((res) => res.json())
            .then((res) => {
                this.setState({ todos: res });
            })
    }

    handleSubmit(event) {
        // Prevent form to refresh the page
        event.preventDefault();
        if (!this.state.input) { return }
        const newData = { content: this.state.input, isCompleted: false };
        fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newData),
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ todos: [...this.state.todos, res] })
            })
        this.setState({ input: "" })
    }

    // Update the input 
    handleInput(e) {
        const newVal = e.target.value;
        this.setState({ input: newVal })
    }

    // Delete one todo from todo list
    handleDelete(e) {
        const { id } = e.target.parentElement;
        fetch(`${URL}/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((res) => {
                const newTodos = this.state.todos.filter((todo) => +todo.id !== +id);
                this.setState({ todos: newTodos })
            })
    }

    // Handle the edit button
    handleEdit(e) {
        const { id } = e.target.parentElement;
        const todo = this.state.todos.find((todo) => +todo.id === +id);
        fetch(`${URL}/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ isEdit: !todo.isEdit, content: todo.content }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                todo.isEdit = res.isEdit;
                this.setState({ ...this.state.todos })
            })
    }

    // Handle the todo input if it's isEdit
    handleInputEdit(e) {
        const { id } = e.target.parentElement;
        const newContent = e.target.value;
        const newTodos = this.state.todos.map((todo) => {
            if (+todo.id === +id) {
                todo.content = newContent;
            }
            return todo;
        })
        this.setState({ todos: newTodos });
    }

    // Toggle the todo items
    handdleToggle(e) {
        const { id } = e.target.parentElement;
        const todo = this.state.todos.find((todo) => +todo.id === +id);
        fetch(`${URL}/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ isCompleted: !todo.isCompleted }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                todo.isCompleted = res.isCompleted;
                this.setState({ ...this.state.todos })
            })
    }

    render() {
        const active = this.state.todos.sort((a, b) => b.id - a.id).filter((todo) => !todo.isCompleted);
        const completed = this.state.todos.sort((a, b) => b.id - a.id).filter((todo) => todo.isCompleted);
        return (
            <div className="todo__container" >
                <header><h3>Todo list</h3></header>
                <form className='todo__form' onSubmit={this.handleSubmit}>
                    <div className='todo__form--inputGroup'>
                        <input onChange={this.handleInput} value={this.state.input || ""} />
                        <button className='btn__submit'>Submit</button>
                    </div>
                </form>
                <div className='todo__list-container'>
                    <ul className="todo__list" >
                        {active.length !== 0 ?
                            active.map((todo, i) => {
                                return <li key={i} id={todo.id}>
                                    {todo.isEdit ?
                                        <input
                                            className="todo__content--input"
                                            onChange={this.handleInputEdit}
                                            value={this.state.todos.filter((t) => +t.id === todo.id)[0].content} />
                                        :
                                        <span onClick={this.handdleToggle}>
                                            {todo.content}
                                        </span>
                                    }

                                    <button
                                        className="btn--modify"
                                        onClick={this.handleEdit} >
                                        {EDITICON}
                                    </button>
                                    <button
                                        className="btn--delete"
                                        onClick={this.handleDelete} >
                                        {DELETEICON}
                                    </button>
                                </li>
                            }) :
                            <span className='span__noactive'>No active task</span>
                        }

                    </ul>
                    <ul className="todo__list">
                        {completed && completed.map((todo, i) => {
                            return <li key={i} id={todo.id} >
                                <span className="todo__content-complete" onClick={this.handdleToggle}>
                                    {todo.content}
                                </span>
                                <button className="btn--delete" onClick={this.handleDelete}>
                                    {DELETEICON}
                                </button>
                            </li>
                        })}
                    </ul>
                </div>
            </div >
        );
    }
}

export default Todo;