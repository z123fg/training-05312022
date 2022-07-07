import React from "react"
import "./todoItem.css"

const TodoItem = ({todo, changeItemTodo, completeTodo, editTodo, deleteTodo}) => {
    
    return(
        <li key = {todo.id} className={`todo__list-item`}>
                    {todo.isEdit ?(<input value={todo.content} onChange = {(e) => changeItemTodo(todo.id, e)}/>):(<span onClick={completeTodo}>{todo.content}</span>)}
                    {!todo.isCompleted&&<button onClick={editTodo}>edit</button>}
                    <button onClick={(event)=>deleteTodo(todo.id, event)}>delete</button>
                    </li>
    )
}

export default TodoItem