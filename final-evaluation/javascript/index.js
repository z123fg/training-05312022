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

  const updateToDo = (newToDos, id) => {
    return fetch(`${URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(newToDos),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json();
    });
  };

  const patchToDo = (newToDos, id) => {
    return fetch(`${URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newToDos),
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
  const todoListEl = document.querySelector(".todo__list");
  const renderToDoList = (toDos) => {
    let template = "";
    toDos
      .sort((a, b) => b.id - a.id)
      .forEach((todo) => {
        template += `
              <li>
              <button class='btn--not-done' id="${todo.id}"><span class="span">${todo.content}</span></button>
              <button class="btn--edit" id="${todo.id}"><img src="../assets/edit.svg" height='20'
              width='20'></button>
              <button class="btn--delete" id="${todo.id}"><img src="../assets/delete.svg" height='20'
              width='20'></button>
              </li>
          `;
      });
    todoListEl.innerHTML = template;
  };
  return {
    formEl,
    renderToDoList,
    todoListEl,
  };
})();

const ViewModel = ((Model, View) => {
  const state = new Model.State();

  const addToDo = () => {
    View.formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const content = event.target[0].value;
      if (content.trim() === "") return;
      const newTodo = { content };
      APIs.addToDo(newTodo).then((res) => {
        state.toDos = [res, ...state.toDos];
      });
    });
  };

  const editToDo = () => {
    View.todoListEl.addEventListener("click", (event) => {
      const { id } = event.target;
      if (event.target.className === "btn--edit") {
        editableSpan = document.getElementById(`${id}`);
        newText = editableSpan.innerHTML;
        editableSpan.innerHTML = `<input type="text" />`;
      }
      APIs.editToDo(newTodo).then((res) => {
        state.toDos = [res, ...state.toDos];
      });
    });
  };

  const deleteToDo = () => {
    View.todoListEl.addEventListener("click", (event) => {
      const { id } = event.target;
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
    View.todoListEl.addEventListener("click", (event) => {
      if (event.target.className === "span") {
        event.target.className = "span--done";
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
