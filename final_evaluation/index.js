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
    todos
      .sort((a, b) => b.id - a.id)
      .forEach((todo) => {
        template += `
              <li><span id="span${todo.id}">${todo.content}</span>
              <form class="todo__form" id="todo__form${todo.id}">
                <input class ="todo__update" id="todo__update${todo.id}" />
                <button class="btn--edit" id="${todo.id}"><div class="icon">${EDITICON}</div></button>
                <button class="btn--delete" id="${todo.id}"><div class="icon">${DELETEICON}</div></button></li>
              </form>
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
      const newTodo = { content };
      APIs.addTodo(newTodo).then((res) => {
        state.todos = [res, ...state.todos];
      });
    });
  };

  const editTodo = () => {
    View.todoListEl.addEventListener("click", (event) => {
      event.preventDefault();
      const { id } = event.target;
      const newForm = event.currentTarget.querySelector("#todo__form" + id);
      const updateInput = event.currentTarget.querySelector(
        "#todo__update" + id
      );
      //toggle todo list
      // const span = event.currentTarget.querySelector("#span" + id);
      // if(span.innerHTML){
      //   const content = span.innerHTML;
      //   span.innerHTML = `<strike>${content}</strike>`
      // }

      // change input display to block
      if (event.target.className === "btn--edit") {
        if ((updateInput.style.display = "none")) {
          updateInput.style.display = "block";
          const updateContent = newForm.querySelector("input").value;
          // update content from "the new" input
          if (updateContent) {
            updateInput.style.display = "none";
            console.log(updateContent);
            APIs.updateTodo(id, { content: updateContent }).then((res) => {
              console.log("Res", res);
              state.todos = state.todos.map((todo) =>
                +todo.id === +id
                  ? { id: todo.id, content: updateContent }
                  : todo
              );
            });
          }
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
    getTodos();
    addTodo();
    editTodo();
    deleteTodo();
    state.subscirbe(() => {
      View.renderTodolist(state.todos);
    });
  };
  return {
    bootstrap,
  };
})(Model, View);

ViewModel.bootstrap();
