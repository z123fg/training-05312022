import React from 'react';
import EditForm from './EditForm';

class TodoItem extends React.Component {
    
    render(){
        return(
            <li key={this.props.todo.id} className="todo__list--li" id={this.props.todo.id}>
                {
                  this.props.todo.isEdit ? <EditForm todo={this.props.todo} /> : 
                  <span className = {this.props.todo.isComplete ? "strike" : "hidden"} onClick={this.props.handleStatusClick}>{this.props.todo.content}</span>  
                }
                
                <button className="btn--edit" onClick={this.props.handleEditClick}>Edit</button>
                <button className="btn--delete" onClick={this.props.handleDeleteClick}>Delete</button>
            </li>
        )
    }

}

export default TodoItem;