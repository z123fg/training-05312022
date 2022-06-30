const URL = "http://localhost:3000/todos";
const CURL = "http://localhost:3000/completed";

const addTodo = (newTodos) => {
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify({ ...newTodos, status: false }),
    headers: {
      "Content-Type": "application/json",
    },
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

const editTodo = (id, newTodo) => {
  return fetch(`${URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ ...newTodo }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
};
const completeTodo = (id) => {
  return fetch(`${URL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status: true }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
};
const unfinishTodo = (id) => {
  return fetch(`${URL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status: false }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
};

const reAddTodo = (newTodo) => {
  console.log(newTodo);
  fetch(URL, {
    method: "POST",
    body: JSON.stringify({ content: newTodo.innerHTML }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return fetch(`${CURL}/${newTodo.id}`, {
      method: "DELETE",
    }).then((res) => {
      return res.json();
    });
  });
};

const getTodos = () => {
  return fetch(`${URL}`).then((res) => {
    return res.json();
  });
};
const getCompleted = () => {
  return fetch(`${CURL}`).then((res) => {
    return res.json();
  });
};

export {
  getTodos,
  getCompleted,
  deleteTodo,
  addTodo,
  editTodo,
  completeTodo,
  unfinishTodo,
  reAddTodo,
};
