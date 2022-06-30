import React from "react";
class AddTodo extends React.Component {
  state = {
    defaultValue: "",
    value: this.props.addTodoValue,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  clearInput = () => {
    document.getElementById("todoValue__input").value = "";
    this.setState({ value: "" });
  };

  addTodo = () => {
    this.props.addTodo(this.state.value);
    this.clearInput();
  };
  render() {
    return (
      <>
        <div className="todolist__input">
          <input
            type="text"
            id="todoValue__input"
            onChange={this.handleChange}
          />
          <button className="todolist__input-btn" onClick={this.addTodo}>
            Submit
          </button>
        </div>
      </>
    );
  }
}
export default AddTodo;
