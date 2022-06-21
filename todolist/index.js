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
  const patchTodo = (newTodo, id) => {
    return fetch(URL + `/${id}`, {
      method: "PATCH",
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

  const getTodos = () => {
    return fetch(`${URL}`).then((res) => {
      return res.json();
    });
  };

  return {
    patchTodo,
    getTodos,
    deleteTodo,
    addTodo,
  };
})();

/* 
    closure, IIFE
    event bubbling, event capturing
    json server
*/
const Model = (() => {
  class State {
    #todos;
    #onChangeCb;
    constructor() {
      this.#todos = [];
      this.#onChangeCb = () => {};
    }
    get todos() {
      return this.#todos;
    }
    set todos(newTodos) {
      console.log("this is from setter function");
      newTodos = newTodos.map((newTodo) => ({ isEdit: false, ...newTodo }));
      // if there is no isEdit in the object, add one with value false, if there is, override false with whatever it is
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

/* 
    [
        {content:"work",id:1},
        {content:"eat",id:2}
    ]
*/

const View = (() => {
  const formEl = document.querySelector(".todo__form");
  const todoListEl = document.querySelector(".todo__list");
  const renderTodolist = (todos) => {
    let template = "";
    const completedTodos = todos.filter((todo) => todo.isCompleted);
    const activeTodos = todos.filter((todo) => !todo.isCompleted);
    activeTodos
      .sort((a, b) => b.id - a.id)
      .forEach((todo) => {
        template += `
                <li  id="${todo.id}">
                    ${
                      todo.isEdit
                        ? `<input class="todo__input" value="${todo.content}"/>`
                        : `<span class="${
                            todo.isCompleted ? "line-through" : ""
                          } todo__content">${todo.content}</span>`
                    }
                    <button class="btn--edit">Edit</button>
                    <button class="btn--delete">Delete</button>
                </li>
            `;
      });

      template+="<br>"

    completedTodos
      .sort((a, b) => b.id - a.id)
      .forEach((todo) => {
        template += `
                <li  id="${todo.id}">
                        <span class="${
                          todo.isCompleted ? "line-through" : ""
                        } todo__content">${todo.content}</span>
                    <button class="btn--delete">Delete</button>
                </li>
            `;
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
  const addTodo = () => {
    View.formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const content = event.target[0].value;
      if (content.trim() === "") return;
      const newTodo = { content, isCompleted: false };
      APIs.addTodo(newTodo).then((res) => {
        // console.log("Res", res);
        state.todos = [{ ...res }, ...state.todos];
      });
    });
  };

  const deleteTodo = () => {
    View.todoListEl.addEventListener("click", (event) => {
      console.log(event.currentTarget, event.target);
      const { id } = event.target.parentElement;
      if (event.target.className === "btn--delete") {
        APIs.deleteTodo(id).then((res) => {
          console.log("Res", res);
          state.todos = state.todos.filter((todo) => {
            return +todo.id !== +id;
          });
        });
      }
    });
  };

  const toggleTodo = () => {
    View.todoListEl.addEventListener("click", (event) => {
      const { id } = event.target.parentElement;
      if (event.target.classList.contains("todo__content")) {
        const targetTodo = state.todos.find((todo) => +todo.id === +id);
        const newTodo = { isCompleted: !targetTodo.isCompleted };
        APIs.patchTodo(newTodo, id).then((res) => {
          //promise, then chaining
          //console.log("response",res);
          targetTodo.isCompleted = res.isCompleted;
          //console.log("todos", state.todos)
          state.todos = [...state.todos];
        });
      }
    });
  };

  const editTodo = () => {
    View.todoListEl.addEventListener("click", (event) => {
      if (!event.target.classList.contains("btn--edit")) return;
      const { id } = event.target.parentElement;
      const targetTodo = state.todos.find((todo) => +todo.id === +id);

      if (targetTodo.isEdit) {
        //save the content first, then update the state
        const inputEl = event.target.parentElement.children.item(0);
        const newTodo = { content: inputEl.value };
        APIs.patchTodo(newTodo, id).then((res) => {
          console.log("response", res);
          targetTodo.isEdit = false;
          targetTodo.content = res.content;
          state.todos = [...state.todos];
        });
      } else {
        //update the state by replacing span with input
        targetTodo.isEdit = true;
        state.todos = [...state.todos];
      }
    });
  };

  const getTodos = () => {
    APIs.getTodos().then((res) => {
      state.todos = res;
    });
  };

  const bootstrap = () => {
    addTodo();
    deleteTodo();
    getTodos();
    toggleTodo();
    editTodo();
    state.subscirbe(() => {
      View.renderTodolist(state.todos);
    });
  };
  return {
    bootstrap,
  };
})(Model, View);

ViewModel.bootstrap();
