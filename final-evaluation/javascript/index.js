const APIs = (() => {
  const URL = "http://localhost:3000/toDos";

  const getToDo = () => {
    return fetch(`${URL}`).then((res) => res.json());
  };

  const addToDo = (newToDos) => {
    return fetch(URL, {
      method: "POST",
      body: JSON.stringify(newToDos),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const updateToDo = (newToDo, id) => {
    return fetch(`${URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(newToDo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json();
    });
  };

  const patchToDo = (newToDo, id) => {
    return fetch(`${URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newToDo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json();
    });
  };

  const deleteToDo = (id) => {
    return fetch(`${URL}/${id}`, {
      method: "DELETE",
    }).then((res) => {
      return res.json();
    });
  };

  return {
    getToDo,
    addToDo,
    updateToDo,
    patchToDo,
    deleteToDo,
  };
})();

const Model = (() => {
  class State {
    #toDos;
    #onChangeCb;
    constructor() {
      this.#toDos = [];
      this.#onChangeCb = () => {};
    }
    get toDos() {
      return this.#toDos;
    }
    set toDos(newToDos) {
      this.#toDos = newToDos;
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

const View = (() => {
  const formEl = document.querySelector(".todo__form");
  //const todoListEl = document.querySelector(".todo__list");
  const todoListElActive = document.querySelector(".todo__list-active-task");
  const todoListElInactive = document.querySelector(
    ".todo__list-inactive-task"
  );
  const renderToDoList = (toDos) => {
    //let template = "";
    let active = "";
    let inactive = "";

    // toDos
    //   .sort((a, b) => b.id - a.id)
    //   .forEach((todo) => {
    //     template += `
    //           <li class="todo__list-active-task">
    //           <input  id="${todo.id}" type="text" class='${
    //       todo.taskComplete ? "task task--done" : "task"
    //     }' value="${todo.content}" disabled />
    //           <button class="btn--edit" id="${todo.id}"></button>
    //           <button class="btn--delete" id="${todo.id}"></button>
    //           </li>
    //       `;
    //   });

    const activeTasks = toDos.filter((todo) => todo.isActive);
    activeTasks
      .sort((a, b) => b.id - a.id)
      .forEach((todo) => {
        active += `
              <li class="todo__list-active-task">
              <input  id="${todo.id}" type="text" class='${
          todo.taskComplete ? "task task--done" : "task"
        }' value="${todo.content}" disabled />
              <button class="btn--edit" id="${todo.id}"></button>
              <button class="btn--delete" id="${todo.id}"></button>
              </li>
          `;
      });

    const inactiveTasks = toDos.filter((todo) => !todo.isActive);
    inactiveTasks
      .sort((a, b) => b.id - a.id)
      .forEach((todo) => {
        inactive += `
                <li class="todo__list-inactive-task">
                <input  id="${todo.id}" type="text" class='${
          todo.taskComplete ? "task task--done" : "task"
        }' value="${todo.content}" disabled />
                <button class="btn--edit" id="${todo.id}"></button>
                <button class="btn--delete" id="${todo.id}"></button>
                </li>
            `;
      });
    //todoListEl.innerHTML = template;
    todoListElActive.innerHTML = active;
    todoListElInactive.innerHTML = inactive;
  };
  return {
    formEl,
    renderToDoList,
    //todoListEl,
    todoListElActive,
    todoListElInactive,
  };
})();

const ViewModel = ((Model, View) => {
  const state = new Model.State();

  const addToDo = () => {
    View.formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const content = event.target[0].value;
      const taskComplete = false;
      const isActive = true;
      const isEditable = false;
      if (content.trim() === "") return;
      const newTodo = { content, taskComplete, isEditable, isActive };
      APIs.addToDo(newTodo).then((res) => {
        state.toDos = [res, ...state.toDos];
      });
    });
  };

  const editToDo = () => {
    View.todoListElActive.addEventListener("click", (event) => {
      const { id } = event.target;
      event.preventDefault();
      if (event.target.className === "btn--edit") {
        //Toggle state to be editable or not
        event.target.isEditable = !event.target.isEditable;
        event.target.className = "btn--save";
        const editField = document.getElementById(`${id}`);
        editField.removeAttribute("disabled");
      } else if (event.target.className === "btn--save") {
        event.target.isEditable = !event.target.isEditable;
        event.target.className = "btn--edit";
        const editField = document.getElementById(`${id}`);
        editField.setAttribute("disabled", "true");
        const editedTask = document.getElementById(`${id}`).value;
        const editedToDo = state.toDos.find((todo) => +todo.id === +id);
        editedToDo.content = editedTask;
        APIs.updateToDo(editedToDo, id).then((res) => {
          state.toDos = res;
        });
      }
    });
  };

  const deleteToDo = () => {
    View.todoListElActive.addEventListener("click", (event) => {
      const { id } = event.target;
      event.preventDefault();
      if (event.target.className === "btn--delete") {
        APIs.deleteToDo(id).then((res) => {
          state.toDos = state.toDos.filter((todo) => {
            return +todo.id !== +id;
          });
        });
      }
    });
    View.todoListElInactive.addEventListener("click", (event) => {
      const { id } = event.target;
      event.preventDefault();
      if (event.target.className === "btn--delete") {
        APIs.deleteToDo(id).then((res) => {
          state.toDos = state.toDos.filter((todo) => {
            return +todo.id !== +id;
          });
        });
      }
    });
  };

  const getToDos = () => {
    APIs.getToDo().then((res) => {
      state.toDos = res;
    });
  };

  const setToDone = () => {
    View.todoListElActive.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.classList.contains("task")) {
        //toggle between done and not done
        let clickedId = event.target.id;
        state.toDos = state.toDos.map((todo, id) => {
          if (+todo.id === +clickedId) {
            todo.taskComplete = !todo.taskComplete;
            todo.isActive = !todo.isActive;
            APIs.patchToDo(todo, todo.id).then((res) => {
              state.toDos = res;
            });
          }
          return todo;
        });
      }
    });
    View.todoListElInactive.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.classList.contains("task")) {
        //toggle between done and not done
        let clickedId = event.target.id;
        state.toDos = state.toDos.map((todo, id) => {
          if (+todo.id === +clickedId) {
            todo.taskComplete = !todo.taskComplete;
            todo.isActive = !todo.isActive;
            APIs.patchToDo(todo, todo.id).then((res) => {
              state.toDos = res;
            });
          }
          return todo;
        });
      }
    });
  };

  const bootstrap = () => {
    addToDo();
    editToDo();
    deleteToDo();
    getToDos();
    setToDone();
    state.subscribe(() => {
      View.renderToDoList(state.toDos);
    });
  };
  return {
    bootstrap,
  };
})(Model, View);

ViewModel.bootstrap();
