import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "../TodoItem/TodoItem";
import "./Todolist.css";

/* 
  {
    id:
    content:
    isEdit:
    isCompleted:
  }


  axios: interceptor, instance, cancel token, error handling
*/

const URL = "http://localhost:3000/todos";

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get(URL).then((res) => {
      setTodos(
        res.data.map((item) => ({
          ...item,
          isEdit: false,
        }))
      );
    });
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    const newTodo = {
      content: value,
      isCompleted: false,
    };
    axios.post(URL, newTodo).then((res) => {
      setTodos((prev) => {
        return [{ ...res.data, isEdit: false }, ...prev];
      });
      setValue("");
    });
  };

  const handleDelete = (id) => {
    axios.delete(`${URL}/${id}`).then((res) => {
      setTodos((prev) => {
        return prev.filter((item) => !(+item.id === +id));
      });
    });
  };

  const handleEdit = (id) => {
    const targetIndex = todos.findIndex((item) => +item.id === +id);
    const targetTodo = todos[targetIndex];
    if (!targetTodo.isEdit) {
      setTodos((prev) => {
        return [
          ...prev.slice(0, targetIndex),
          {
            ...prev[targetIndex],
            isEdit: true,
          },
          ...prev.slice(targetIndex + 1),
        ];
      });
    } else {
      axios
        .patch(`${URL}/${id}`, { content: targetTodo.content })
        .then((res) => {
          setTodos((prev) => [
            ...prev.slice(0, targetIndex),
            {
              ...prev[targetIndex],
              content: res.data.content, //redundant
              isEdit: false,
            },
            ...prev.slice(targetIndex + 1),
          ]);
        });
    }
  };

  const handleComplete = (id) => {
    const targetIndex = todos.findIndex((item) => +item.id === +id);
    axios
      .patch(`${URL}/${id}`, { isCompleted: !todos[targetIndex].isCompleted })
      .then((res) => {
        setTodos((prev) => [
          ...prev.slice(0, targetIndex),
          {
            ...prev[targetIndex],
            isCompleted: res.data.isCompleted,
          },
          ...prev.slice(targetIndex + 1),
        ]);
      });
  };

  const handleChangeItem = (id, e) => {
    const targetIndex = todos.findIndex((item) => +item.id === +id);
    setTodos((prev) => {
      return [
        ...prev.slice(0, targetIndex),
        {
          ...prev[targetIndex],
          content: e.target.value,
        },
        ...prev.slice(targetIndex + 1),
      ];
    });
  };

  const handleTest = () => {

  }
  

  return (
    <div className="todo__container">





      {/* <div className="test" id="test" onClick={handleTest}>{[<div>1</div>, <div>2</div>]}</div> */}

      
      
       { React.createElement("div",{className:"test", id:"test", onClick:handleTest},[React.createElement("div",{},["1"]),  React.createElement("div",{},["2"])])}
      
     





      <div className="todo__form">
        <input onChange={handleChange} value={value} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="todo__list-container">
        <ul className="todo__list--pending">
          {todos
            .filter((item) => !item.isCompleted)
            .map((item) => {
              /* <li key={item.id}>

                  {item.isEdit?<input value={item.content} onChange={(e)=>handleChangeItem(item.id,e)}/>:<span onClick={()=>handleComplete(item.id)}>{item.content}</span>}
                  <button onClick={()=>handleEdit(item.id)}>edit</button>
                  <button onClick={()=>handleDelete(item.id)}>delete</button>
                </li> */
              return (
                <TodoItem
                  key={item.id}
                  todo={item}
                  handleChangeItem={handleChangeItem}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  handleComplete={handleComplete}
                />
              );
            })}
        </ul>
        <ul className="todo__list--completed">
          {todos
            .filter((item) => item.isCompleted)
            .map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  todo={item}
                  handleChangeItem={handleChangeItem}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  handleComplete={handleComplete}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Todolist;
