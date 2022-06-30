import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

    render(){
        const todos = this.props.todos.map(todo => 
            <TodoItem 
                key={todo.id} 
                todo={todo} 
                handleEditClick={this.props.handleEditClick}
                handleDeleteClick={this.props.handleDeleteClick}
                handleStatusClick={this.props.handleStatusClick}
            />)
        return(
            <div className="todo__list-container">
                { todos.length === 0 ? <p className="todo--alert">No Active Task</p> : <div className="todo__list">{todos}</div>}
            </div>
        )
    }

}

export default TodoList;