import React from "react";
import { useEffect } from "react";
import { useState } from 'react';
import APIs from "./APIs";


function Todo(){
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState([]);
    // fetch data from backend
    useEffect(()=> {
        // fetch todos from backend
            // completed: false
            // id: 1
            // title: "delectus aut autem"
        APIs.getTodos().then((todos)=> {
                setLoading(false);
                let tempTodos = todos.map(obj => ({...obj, isEditing: false}));
                tempTodos.sort((a, b) => Number(a.completed) - Number(b.completed))
                console.log("todos: ", tempTodos);
                setTodos(tempTodos);
            })
            .catch(err => {console.log("error fetching data")})
    },[])
    // add new todo
    const handleAddTodo = (e) => {
        e.preventDefault();
        let newTodo = {
            title: e.target.title.value,
            completed: false
        }
        APIs.addTodo(newTodo).then(res=> {
            let newTodos = [...todos, {...res, isEditing: false}].sort((a, b) => Number(a.completed) - Number(b.completed));
            setTodos(newTodos);
        })

    }
    // update complete task
    const handleCompleteTask = (id) => {
        let updatedTodo = todos.find(todo => todo.id === id);
        updatedTodo.completed = !updatedTodo.completed;
        delete updatedTodo.isEditing;
        let sTodoIndex = todos.findIndex(todo => +todo.id === +id);
        APIs.updateTodo(id, updatedTodo).then(res =>{
            let tempTodos = [...todos];
            tempTodos[sTodoIndex] = {...updatedTodo, isEditing: false};
            tempTodos.sort((a, b) => Number(a.completed) - Number(b.completed));
            setTodos(tempTodos);
        })
    }
    // Update content of todo
    const toggleEdit = (id) => {
        let sTodoIndex = todos.findIndex(todo => +todo.id === +id);
        let tempTodos = [...todos];
        if(tempTodos[sTodoIndex].isEditing){
            let updatedTodo = tempTodos[sTodoIndex];
            delete updatedTodo.isEditing;
            APIs.updateTodo(id, updatedTodo).then(res => {
                tempTodos[sTodoIndex].isEditing = false;
            })
        } else {tempTodos[sTodoIndex].isEditing = true}
        setTodos(tempTodos);
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
        APIs.deleteTodo(id).then(res => {
            let newTodos = todos.filter( todo =>(todo.id !== id))
            setTodos(newTodos);
        })
    }

    return (
        <div>
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