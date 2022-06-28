import React from 'react';
import APIs from '../api';

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      content: props.todo?.content || ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      content: e.target.value
    });
  }

  handleToggle() {
    if (this.props.todo) {
      const { status, id } = this.props.todo;
      const newTodo = {
        status: status === 'pending' ? 'completed' : 'pending'
      };
      APIs.editTodo(id, newTodo).then(res => {
        // console.log("Res", res);
        this.props.refreshData();
      });
    }
  }
  
  handleEditClick() {
    if (this.props.todo.status === "completed") return;
    if (this.state.edit) {
      const newValue = this.state.content;
      if (newValue.trim() === '') return;
      const { id } = this.props.todo;
      const newTodo = {
        content: newValue
      };
      APIs.editTodo(id, newTodo).then(res => {
        // console.log("Res", res);
        this.setState({
          ...this.state,
          edit: false
        });
        this.props.refreshData();
      });
    } else {
      this.setState({
        ...this.state,
        edit: true
      });
    }
  }

  handleDeleteClick() {
    const { id } = this.props.todo;
    APIs.deleteTodo(id).then(res => {
      // console.log("Res", res);
      this.props.refreshData();
    });
  }
  
  render() {
    const { todo } = this.props;

    if (todo === null) {
      return (
        <li className="todo__list-item todo__list-item--dummy">
          <span>asdfasdf</span>
          <button>Edit</button>
        </li>
      );
    }

    return (
      <li className="todo__list-item">
        {this.state.edit ? (
          <input
            className="todo__list-input"
            id={`input-${todo.id}`}
            value={this.state.content}
            onChange={this.handleChange}
          />
        ) :
        (
          <span
            className={`todo__list-text ${todo.status === 'completed' ? 'todo__list-text--completed' : ''}`}
            id={`span-${todo.id}`}
            onClick={this.handleToggle}
          >
            {todo.content}
          </span>
        )}
        <button
          className="btn btn--edit"
          onClick={this.handleEditClick}
        />
        <button
          className="btn btn--delete"
          onClick={this.handleDeleteClick}
        />
      </li>
    );
  }
}

export default ListItem;