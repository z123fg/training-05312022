import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/ListElement/ElementGroup";
import React from "react";

class App extends React.Component {
  state = {
    list: [
      { id: 1, content: "one", isComplete: false, isEdit: false },
      { id: 2, content: "two", isComplete: false, isEdite: false },
    ],
  };
  // handleSpan = () => {};

  handleEdit = (event) => {
    // for (let i = 0; i < this.state.list.length; i++) {
    //   if (this.state.list[i].id === 1) {
    //     console.log(
    //       "in the handle edit ",
    //       this.state.list[0],
    //       this.state.list[1]
    //     );
    //     this.state.list[i].content = "changed";
    //     this.setState((this.state.list = [...this.state.list]));
    //   }
    // }

    //const el = event.target.
    const inputEl = event.target.parentElement.children.item(0);
    //console.log("Event ", event.target.parentElement.children.item(0));
  };

  handleDelete = (event) => {
    const el = event.target.parentElement;
    for (let i = 0; i < this.state.list.length; i++) {
      //if (this.state.list[i].id === 1)
      if (this.state.list[i].id === el.id) {
        console.log(
          "in the handle edit ",
          this.state.list[0].id,
          this.state.list[1].id,
          el.id
        );
        this.state.list[i].content = "changed";
        this.setState((this.state.list = [...this.state.list]));
      }
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <ul>
          {/*all element */}
          <TodoList
            // handleSpan={this.handleSpan}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            //content={this.state.list[0].content}
            list={this.state.list}
          />
        </ul>
      </div>
    );
  }
}
export default App;
