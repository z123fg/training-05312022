import React from "react";
import { useEffect } from "react";
import { useState } from 'react';
import APIs from "./APIs";


function Todo(){
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState([]);
    useEffect(()=> {
        // fetch todos from backend
            //completed: false
            // id: 1
            // title: "delectus aut autem"
        // console.log(APIs);
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((todos)=> {
                setLoading(false);
                let tempTodos = todos.map(obj => ({...obj, isEditing: false}));
                tempTodos.sort((a, b) => Number(a.completed) - Number(b.completed))
                setTodos(tempTodos);
            })
            .catch(err => {console.log("error fetching data")})
    },[])

    const handleAddTodo = (e) => {
        e.preventDefault();
        let newTodo = {
            id: Math.random(),
            title: e.target.title.value,
            completed: false
        }
        // send this todo to backend

        // ...
        newTodo.isEditing = false;
        let newTodos = [...todos, newTodo].sort((a, b) => Number(a.completed) - Number(b.completed));
        setTodos(newTodos);

    }

    const handleCompleteTask = (id) => {
        let newTodos = todos.map(todo => {
            if (todo.id === id){
                return {...todo, completed: !todo.completed};
            } else {return {...todo}}
        })
        newTodos.sort((a, b) => Number(a.completed) - Number(b.completed))
        setTodos(newTodos);
    }

    const toggleEdit = (id) => {
        let newTodos = todos.map(todo => {
            if (todo.id === id){
                // check if is Editing if editing => update the title with backend
                return {...todo, isEditing: !todo.isEditing}

            } else {return {...todo}}
        })
        setTodos(newTodos);
    }
    
    const handleOnChangeTodo = (e, id) =>{
        let newTodos = todos.map(todo => {
            if (todo.id === id){
                return {...todo, title: e.target.value};
            } else {return {...todo}}
        })
        setTodos(newTodos);
    }

    const handleDelete = (id) => {
        // update with backend first then
        let newTodos = todos.filter( todo =>(todo.id !== id))
        setTodos(newTodos);
    }

    return (
        <div>
            <h1>TODO</h1>
            <form className="todo__form" onSubmit={(e)=>{handleAddTodo(e)}}>
                <input className="input--form" type="text" name="title" required/>
                <button className="btn--submit">Submit</button>
            </form>
            {loading?
                <h2>Fetching Data from Backend</h2>
                :
                todos.map(todo=>(
                    <div key={todo.id} className="todo__li">
                        {
                        todo.isEditing
                            ?<input className="editting-task" type="text" name="todo-content" value={todo.title} onChange={(e)=>{handleOnChangeTodo(e, todo.id)}} />
                            : <span className={todo.completed ? "completed" : ""} onClick={()=>{handleCompleteTask(todo.id)}}>{todo.title}</span>
                        }
                        <div className="sub-container">
                            <button className="btn--edit" type="button" id={todo.id} onClick={()=>{toggleEdit(todo.id)}}>
                            Edit
                            </button>
                            <button className="btn--delete" type="button" id={todo.id} onClick={()=>{handleDelete(todo.id)}} >
                            Delete
                            </button>
                        </div>
                    </div>
                ))
            }

        </div>
    )
};

export default Todo;