import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/ListElement/ElementGroup";
import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <h1>Todo List</h1>

//       {/* <li>{todoList[0].content}</li> */}
//       <TodoList />
//       {/* {todoList.map((item) => (
//           <TodoList key={item.id} item={item} />
//         ))} */}
//     </div>
//   );
// }

class App extends React.Component {
  // state = [
  //   { id: 1, content: "one", isComplete: false },
  //   { id: 2, content: "two", isComplete: false },
  //   { id: 3, content: "three", isComplete: false },
  // ];

  // state = {
  //   item: {
  //     list: [
  //       { id: 1, content: "one", isComplete: false },
  //       { id: 2, content: "two", isComplete: false },
  //       { id: 3, content: "three", isComplete: false },
  //     ],
  //   },
  // };

  state = {
    list: [
      { id: 1, content: "one", isComplete: false },
      { id: 2, content: "two", isComplete: false },
    ],
  };
  // handleSpan = () => {};

  handleEdit = () => {};

  handleDelete = () => {};

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
            content={this.state.list}
          />
        </ul>
      </div>
    );
  }
}
export default App;
