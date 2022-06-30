const APIs = (() => {
  const URL = "http://localhost:3000/todos";

  const addTodo = (newTodo) => {
    return fetch(URL, {
      method: "POST",
      body: JSON.stringify(newTodo),
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
  const updateTodo = (id, updateTodo) => {
    return fetch(`${URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(updateTodo),
      headers: {
        "Content-Type": "application/json",
      },
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
    deleteTodo,
    addTodo,
    updateTodo,
  };
})();

const Model = (() => {
  class State {
    #todos;
    #onChangeCb;
    #showAll;
    constructor() {
      this.#todos = [];
      this.#showAll = false;
      this.#onChangeCb = () => {};
    }
    get todos() {
      return this.#todos;
    }
    set todos(newTodos) {
      this.#todos = newTodos;
      this.#onChangeCb();
    }

    subscirbe = (cb) => {
      this.#onChangeCb = cb;
    };
  }
  return {
    State,
  };
})();

const View = (() => {
  const formEl = document.querySelector(".todo__form");
  const todoListEl = document.querySelector(".todo__list");
  const showAllBtn = document.querySelector(".showAll");
  const renderTodolist = (todos, showAll) => {
    let template = "";
    todos
      .sort((a, b) => b.id - a.id)
      .forEach((todo, index) => {
        template += `<li id=${todo.id}>`;
        template += todo.complete
          ? `<input type="checkbox" checked><s>${todo.content}</s>`
          : `<input type="checkbox"><span contenteditable=true class="editable">${todo.content}</span>`;
        template += '<button class="btn--delete">Delete</button></li>';
      });
    todoListEl.innerHTML = template;
  };
  return {
    formEl,
    renderTodolist,
    todoListEl,
  };
})();

const ViewModel = ((Model, View) => {
  const state = new Model.State();
  state.showAll = false;
  const addTodo = () => {
    View.formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const content = event.target[0].value;
      if (content.trim() === "") return;
      const newTodo = { content };
      APIs.addTodo(newTodo).then((res) => {
        console.log("Res", res);
        state.todos = [res, ...state.todos]; //anti-pattern
      });
    });
  };

  const deleteTodo = () => {
    View.todoListEl.addEventListener("click", (event) => {
      // console.log(event.currentTarget, event.target);
      const id = event.target.parentElement.id;
      if (event.target.className === "btn--delete") {
        APIs.deleteTodo(id).then((res) => {
          // console.log("Res", res);
          state.todos = state.todos.filter((todo) => {
            return +todo.id !== +id;
          });
        });
      }
    });
  };

  const editTodo = () => {
    View.todoListEl.addEventListener("focusout", (event) => {
      const id = event.target.parentElement.id;
      if (event.target.className === "editable") {
        const content = event.target.textContent;
        const updateTodo = { id, content, complete: false };
        APIs.updateTodo(id, updateTodo).then((res) => {
          state.todos = state.todos.map((todo) => {
            return todo.id === id ? { ...todo, content: content } : todo;
          });
        });
      }
    });
  };

  const toggleTodo = () => {
    View.todoListEl.addEventListener("change", (event) => {
      const id = event.target.parentElement.id;
      if (event.target.type === "checkbox") {
        const content = event.target.parentElement.children[1].textContent;
        const updateTodo = { id, content, complete: event.target.checked };
        APIs.updateTodo(id, updateTodo).then((res) => {
          state.todos = state.todos.map((todo) => {
            return todo.id === id
              ? { ...todo, complete: !todo.complete }
              : todo;
          });
        });
      }
    });
  };
  const getAllTodos = () => {
    View.todoContainerEl.addEventListener("click", (event) => {
      if (event.target.className === "showAll") {
        state.showAll = true;
        APIs.getTodos().then((res) => {
          state.todos = res;
        });
      }
    });
  };
  const getTodos = () => {
    APIs.getTodos().then((res) => {
      state.todos = res.slice(0, 5);
    });
  };

  const bootstrap = () => {
    addTodo();
    deleteTodo();
    toggleTodo();
    editTodo();
    getTodos();
    getAllTodos();
    state.subscirbe(() => {
      View.renderTodolist(state.todos, state.showAll);
    });
  };
  return {
    bootstrap,
  };
})(Model, View);

ViewModel.bootstrap();
