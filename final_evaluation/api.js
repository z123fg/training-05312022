const APIs = (() => {
  const URL = "http://localhost:3000/todos";

  const addTodo = (newTodos) => {
    return fetch(URL, {
      method: "POST",
      body: JSON.stringify(newTodos),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json();
    });
  };

  const updateTodo = (id) => {
    return fetch(`${URL}/${id}`, {
      method: "PUT",
    }).then((res) => {
      return res.json();
    });
  };

  const patchTodo = (id) => {
    return fetch(`${URL}/${id}`, {
      method: "PATCH",
    }).then((res) => {
      return res.json();
    });
  };

  const deleteTodo = (id) => {
    return fetch(`${URL}/${id}`, {
      method: "DELETE",
    }).then((res) => {
      return res.json();
    });
  };

  const getTodos = () => {
    return fetch(`${URL}`).then((res) => {
      return res.json();
    });
  };

  return {
    getTodos,
    updateTodo,
    patchTodo,
    deleteTodo,
    addTodo,
  };
})();
