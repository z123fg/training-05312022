const editIcon = `
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
  </svg>`;

const deleteIcon = `
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
    </svg>`;

const arrowLeftIcon = `
    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackIcon" aria-label="fontSize small">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
    </svg>`;

const arrowRightIcon = `
    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon" aria-label="fontSize small">
    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
    </svg>`;

/*------------------------------------------------------------------------------------*/
const APIs = (() => {
  const URL = "http://localhost:3000/todos";
  const CURL = "http://localhost:3000/completed";

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

  const deleteTodo = (id) => {
    return fetch(`${URL}/${id}`, {
      method: "DELETE",
    }).then((res) => {
      return res.json();
    });
  };

  const editTodo = (id) => {
    return fetch(`${URL}/${id}`, {
      method: "PUT",
    }).then((res) => {
      return res.json();
    });
  };
  const completeTodo = (id) => {
    return fetch(`${URL}/${id}`, {
      method: "PATCH",
    }).then((res) => {
      return res.json();
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

  return {
    getTodos,
    getCompleted,
    deleteTodo,
    addTodo,
    editTodo,
    completeTodo,
  };
})();

/*------------------------------------------------------------------------------------*/
const Model = (() => {
  class State {
    #todos;
    #completed;
    #onChangeCb;
    constructor() {
      this.#todos = [];
      this.#completed = [];
      this.#onChangeCb = () => {};
    }
    // List of todos
    get todos() {
      return this.#todos;
    }
    set todos(newTodos) {
      this.#todos = newTodos;
      this.#onChangeCb();
    }
    // List of completed tasks
    get completed() {
      return this.#completed;
    }
    set completed(newComplete) {
      this.#completed = newComplete;
      this.#onChangeCb();
    }

    subscribe = (cb) => {
      this.#onChangeCb = cb;
    };
  }
  return {
    State,
  };
})();

/*------------------------------------------------------------------------------------*/
const View = (() => {
  const formEl = document.querySelector(".todo__form");
  const todoListEl = document.querySelector(".todo__list");
  const renderTodolist = (todos) => {
    let template = "";
    if(todos.length === 0) {
      template += `<span class="todo--none">No active tasks</span>`
    } else {
      todos
        .sort((a, b) => b.id - a.id)
        .forEach((todo) => {
          template += `
            <li>
              <span class="todo--content" id="${todo.id}">${todo.content}</span>
              <button class="btn--edit" id="${todo.id}">${editIcon}</button>
              <button class="btn--delete" id="${todo.id}">${deleteIcon}</button>
            </li>`;
        });
    }
    todoListEl.innerHTML = template;
  };
  const completeListEl = document.querySelector(".complete__list");
  const renderCompleteList = (completed) => {
    let template = "";
    completed
      .sort((a, b) => b.id - a.id)
      .forEach((completed) => {
        template += `
        <li>
          <span class="completed--content" id="${completed.id}">${completed.content}</span>
          <button class="btn--delete" id="${completed.id}">${deleteIcon}</button>
        </li>`;
      });
    completeListEl.innerHTML = template;
  };
  return {
    formEl,
    renderTodolist,
    renderCompleteList,
    todoListEl,
    completeListEl,
  };
})();

/*------------------------------------------------------------------------------------*/
const ViewModel = ((Model, View) => {
  const state = new Model.State();

  const addTodo = () => {
    View.formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const content = event.target[0].value;
      if (content.trim() === "") return;
      const newTodo = { content, status: false };
      APIs.addTodo(newTodo).then((res) => {
        state.todos = [res, ...state.todos]; //anti-pattern
      });
      event.target[0].value = "";
    });
  };

  const deleteTodo = () => {
    View.todoListEl.addEventListener("click", (event) => {
      console.log(event.currentTarget, event.target);
      const { id } = event.target;
      if (event.target.className === "btn--delete") {
        APIs.deleteTodo(id).then((res) => {
          console.log("Res", res);
          state.todos = state.todos.filter((todo) => {
            return +todo.id !== +id;
          });
        });
      }
      event.preventDefault();
    });
  };

  const getTodos = () => {
    APIs.getTodos().then((res) => {
      console.log(res);
      state.todos = res;
    });
  };
  const getCompleted = () => {
    APIs.getCompleted().then((res) => {
      console.log(res);
      state.completed = res;
    });
  };

  const bootstrap = () => {
    addTodo();
    deleteTodo();
    getTodos();
    getCompleted();
    state.subscribe(() => {
      View.renderTodolist(state.todos);
      View.renderCompleteList(state.completed);
    });
  };
  return {
    bootstrap,
  };
})(Model, View);

ViewModel.bootstrap();
