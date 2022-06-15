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

  const deleteTodo = (id) => {
    return fetch(`${URL}/${id}`, {
      method: "DELETE",
    }).then((res) => {
      return res.json();
    });
  };

  const editTodo = (id, updateTodos) => {
    console.log("Edit todo " + updateTodos);
    return fetch(`${URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateTodos),
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
    editTodo,
  };
})();

const Model = (() => {
  class State {
    #todos;
    #onChangeCb;
    #edit;
    constructor() {
      this.#todos = [];
      this.#onChangeCb = () => {};
      this.#edit = false;
    }
    get todos() {
      return this.#todos;
    }
    get edit() {
      return this.#edit;
    }
    set todos(newTodos) {
      this.#todos = newTodos;
      this.#onChangeCb();
    }
    set edit(newEdit) {
      this.#edit = newEdit;
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
        {content:"work",id:1, complete:(strike) t/f},
        {content:"eat",id:2}
    ]
*/

const View = (() => {
  const formEl = document.querySelector(".todo__form");
  const todoListEl = document.querySelector(".todo__list");
  const renderTodolist = (todos) => {
    console.log("todos", todos);
    let template = "";
    todos
      .sort((a, b) => b.id - a.id)
      .forEach((todo) => {
        template += `
                <li id="list_${todo.id}"><span class="span__list ${
          todo.complete ? "strike-through" : ""
        }" id="span__${todo.id}">${
          todo.content
        }</span><button class="btn--edit" id="${
          todo.id
        }">Edit<button class="btn--delete" id="${todo.id}">Delete</button></li>
            `;
      });
    todoListEl.innerHTML = template;
  };

  //   const getUpdateTodos_before = (id, currentContent) => {
  //     let template = "";
  //     template += `<li><input id="${id}"value="${currentContent}"/>
  //                 <button class="btn--edit" id="${id}">Edit
  //                 <button class="btn--delete" id="${id}">Delete</button></li>`;
  //     // console.log("Before" +currentContent);
  //     todoListEl.innerHTML = template;
  //   };

  //   const getUpdateTodos_after = (id, updateTodos) => {
  //     // let template = ""
  //     //         template+=`<li><input id="${id}"value="${currentContent}"/>
  //     //         <button class="btn--edit" id="${id}">Edit
  //     //         <button class="btn--delete" id="${id}">Delete</button></li>`
  //     //console.log("After" + updateTodos);
  //     //todoListEl.innerHTML = template;
  // };

  return {
    formEl,
    renderTodolist,
    todoListEl,
    // getUpdateTodos_before,
    //getUpdateTodos_after,
  };
})();

const ViewModel = ((Model, View) => {
  const state = new Model.State();
  const todoListEl = document.querySelector(".todo__list");

  const addTodo = () => {
    View.formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const content = event.target[0].value;
      if (content.trim() === "") return;
      const newTodo = { content, complete: false };
      APIs.addTodo(newTodo).then((res) => {
        state.todos = [res, ...state.todos];
      });
    });
  };

  function printTodos() {
    for (let i = 0; i < state.todos.length; i++) {
      console.log(state.todos[i]);
    }
  }

  const completeTodo = () => {
    console.log("In the complete to do ", View.todoListEl);
    View.todoListEl.addEventListener("click", (event) => {
      //event.preventDefault();
      console.log(printTodos());
      const { id } = event.target;

      console.log("id", id, "event target", event.target);
      if (event.target.classList.contains("span__list")) {
        for (let i = 0; i < state.todos.length; i++) {
          console.log("In the for loop ");
          if (`span__${state.todos[i].id}` == id) {
            if (state.todos[i].complete == false) {
              state.todos[i].complete = true;
              state.todos = [...state.todos];
            } else {
              state.todos[i].complete = false;
              state.todos = [...state.todos];
            }
          }
        }

        //event.target.style.setProperty("text-decoration", "line-through");
      }
    });
  };

  const editTodo = () => {
    View.todoListEl.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(event.currentTarget, event.target);
      const { id } = event.target;
      var currentContent = event.target.parentNode.firstElementChild.innerHTML;
      var textEl = event.target.parentNode.firstElementChild;
      var liEl = event.target.parentNode;

      //console.log("todos " + printTodos());

      if (event.target.className === "btn--edit") {
        if (state.edit == false) {
          console.log(event.target.parentNode);
          let template = "";

          console.log("liEl " + event.target.parentNode);
          template += `<li id="list_${id}">
                <input id="input__${id}" value="${currentContent}"/>
                <button class="btn--edit" id="${id}">Edit</button>
                <button class="btn--delete" id="${id}">Delete</button></li>
          `;
          liEl.innerHTML = template;

          textEl.style.color = "red";
          state.edit = true;
        } else {
          console.log(event.target.parentNode);
          let template = "";
          let inputEl = document.querySelector("#input__" + id);
          currentContent = inputEl.value;

          console.log("liEl " + event.target.parentNode);
          template += `<li id="list_${id}">
                <span class="span__list"id="span__${id}">${currentContent}</span>
                <button class="btn--edit" id="${id}">Edit</button>
                <button class="btn--delete" id="${id}">Delete</button></li>
          `;

          liEl.innerHTML = template;

          //state.todos = { content: currentContent, id: id };
          //console.log("content " + state.todos[id].content);

          const newTodo = { content: currentContent };

          APIs.editTodo(id, newTodo).then((res) => {
            state.todos = [res, ...state.todos];
          });

          state.edit = false;
        }
      }
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
    });
  };

  const getTodos = () => {
    APIs.getTodos().then((res) => {
      state.todos = res;
    });
  };

  const bootstrap = () => {
    addTodo();
    editTodo();
    deleteTodo();
    getTodos();
    completeTodo();
    state.subscirbe(() => {
      View.renderTodolist(state.todos);
    });
  };
  return {
    bootstrap,
  };
})(Model, View);

ViewModel.bootstrap();
