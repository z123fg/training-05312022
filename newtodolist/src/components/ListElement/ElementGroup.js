import React from "react";
import DeleteElement from "./DeleteElement";
import EditElement from "./EditElement";
import SpanElement from "./SpanElement";

// function TodoList() {
//   const [todoList, setTodolist] = useState([
//     { id: 1, content: "one", isComplete: false },
//     { id: 2, content: "two", isComplete: false },
//     { id: 3, content: "three", isComplete: false },
//   ]);

//   const handleDelete = (id) => {
//     setTodolist(todoList.filter((todo) => todo.id !== id));
//   };

//   return (
//     <ul>
//       {todoList.map((todoList) => (
//         <li key={todoList.id}>
//           {todoList.content}
//           <button>Edit</button>
//           <button onClick={handleDelete} id={todoList.id}>
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

class TodoList extends React.Component {
  render() {
    // const { handleSpan, handleEdit, handleDelete } = this.props;
    const { handleEdit, handleDelete, list } = this.props;
    return (
      <ul>
        {list.map((item) => (
          <li key={item.id} id={item.id}>
            <SpanElement content={item.content} />
            <EditElement handleEdit={handleEdit} />
            <DeleteElement handleDelete={handleDelete} />
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
