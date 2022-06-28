import React from 'react';
import APIs from '../api';

class ListControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodoContent: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const content = e.target[0].value;
    if(content.trim() === "") return;
    const newTodo = {
      content,
      status: 'pending'
    }
    APIs.addTodo(newTodo).then(res => {
      // console.log("Res", res);
      this.props.refreshData();
      const formInput = document.getElementById("todo-form-input");
      formInput.value = '';
    })
  }

  handleNewTodoChange(e) {
    this.setState({ newTodoContent: e.target.value });
  }
  
  handleFilterChange(e) {
    this.props.setSearchKeyword(e.target.value);
  }

  render() {
    return (
      <form className="todo__form" onSubmit={this.handleSubmit}>
        <input
          className="todo__form-input"
          id="todo-form-input"
          // value={this.state.newTodoContent}
          // onChange={handle}
        />
        <button className="btn todo__form-submit">Submit</button>
        <input
          className="todo__form-input"
          id="todo-form-filter"
          value={this.props.searchKeyword}
          onChange={this.handleFilterChange}
        />
      </form>
    );
  }
}

export default ListControl;