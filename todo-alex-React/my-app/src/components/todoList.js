import axios from "axios";
import React, { useState, useEffect } from "react";
import TodoItem from "./todoItem"

const URL = "http://localhost:3000/todos"

const TodoList = () => {
    const {todos, setTodos} = useState([]);
    const {value, setValue} = useState("");

    useEffect(() =>{
        axios.get(URL).then(res=>{
            console.log("res", res);
            setTodos(res.data.map(item=>({
                ...item,

            })));
        });
    },[])
  
    const changeTodo = (e) =>{
        setValue(e.target.value);
    };

    const addTodo = () =>{
        const newTodo = {
            content:value,
            isCompleted:false,
        }
        axios.post(URL,newTodo).then(res=>{
            setTodos(prev=>{
                return[{...res.data, isEdit:false},...prev]
            })
        })
    };

    const deleteTodo = (id) =>{
        console.log("delete");
        axios.delete(`${URL}/${id}`).then(res=>{
            setTodos(prev=>{
                console.log("delete",prev, id, typeof id)
                return prev.filter(item=>(!+item.id == +id))
            })
        })
    };

    const editTodo = (id) =>{
        const targetIndex = todos.findIndex(item=> (+item.id === +id));
        const targetTodo = todo.find[targetIndex];
        if(!targetTodo.isEdit){
            setTodos(prev=>{
                return [
                    ...prev.slice(0,targetIndex),
                    {
                        ...prev[targetIndex],
                        isEdit:true
                    },
                    ...prev.slice(targetIndex+1)
                ]
            })
        }
        else{
            axios.patch(`${URL}/${id}`,{content: targetTodo.content}).then(res=>{
                setTodos(prev=> [
                ...prev.slice(0,targetIndex),
                {
                    ...prev[targetIndex],
                    content:res.data.content,
                    isEdit:false
                },
                ...prev.slice(targetIndex+1)
                ])
            })
        }
    };

    const completeTodo = () => {
        const targetIndex = todos.findIndex(item=>+item.id === +id);
        axios.patch(`${URL}/${id}`,{})
        setTodos(prev=>[
            ...prev.slice(0,targetIndex),
            {
                ...prev[targetIndex],
                content:res.data.isCompleted
            },
            ...prev.slice(targetIndex+1)
        ])
    };

    const changeItemTodo = (id) => {
        const targetIndex = todos.findIndex(item=> (+item.id === +id));
        setTodos(prev=>{
            return [
                ...prev.slice(0, targetIndex),
                {
                    ...prev[targetIndex],
                    content:res.data.target,

                },
                ...prev.slice(targetIndex+1)
            ]
        })
    }
  
      return (
        <div className="todo__container">
          <form class="todo__form">
          <input class = "input" onChange={changeTodo} onfocus="this.value=''"/>
          <button class = "btn--done" onClick={addTodo}>Submit</button>
          </form>
          <div class="todo__list-container">
            <ul class="todo__list">
                {todos.filter(item=> !item.isCompleted)
                .map(item=>{
                    return (
                    <TodoItem 
                    todo={item} 
                    changeItemTodo={changeItemTodo} 
                    deleteTodo={deleteTodo} 
                    editTodo = {editTodo} 
                    completeTodo = {completeTodo}/>)
                })}
            </ul>
            <ul className="todo__list">
                {todos
                .filter((item) => item.isCompleted)
                .map((item) => {
                    <li key ={item.id}>
                        <span onClick={completeTodo(item.id)}>{item.content}</span>
                        <button onClick={()=>deleteTodo(item.id)}>delete</button>
                    </li>
                })}
            </ul>
          </div>
        </div>
    );
  }
  
  export default TodoList;