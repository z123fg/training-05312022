import React from "react"
import "./TodoItem.css"

const TodoItem = ({
    todo, 
    changeItemTodo, 
    completeTodo, 
    editTodo, 
    deleteTodo}) => {
    
        return (
            <li key={todo.id} className={`todo__list-item ${todo.isCompleted?"todo__list-item--completed":""}`}>
              {todo.isEdit ? (
                <input
                  value={todo.content}
                  onChange={(e) => changeItemTodo(todo.id, e)}
                />
              ) : (
                <span onClick={() => completeTodo(todo.id)}>{todo.content}</span>
              )}
              {!todo.isCompleted&&<button onClick={() => editTodo(todo.id)}>edit</button>}
              <button onClick={() => deleteTodo(todo.id)}>delete</button>
            </li>
          );
        };

export default TodoItem