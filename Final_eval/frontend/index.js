const APIs = (() => {
  const URL = "http://localhost:3000/todos";

  const addTodo = (newTodos) => {
      return fetch(URL, {
          method: "POST",
          body: JSON.stringify(newTodos),
          headers: {
              'Content-Type': 'application/json'
          }
      }).then((res) => {
          return res.json();
      })
  }

  const editTodo = (id, todo) => {
    return fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo)
    }).then((res) => {
      return res.json();
    })
  };


  const deleteTodo = (id) => {
      return fetch(`${URL}/${id}`, {
          method: "DELETE"
      }).then((res) => {
          return res.json();
      })
  };

  const getTodos = () => {
      return fetch(`${URL}`).then((res) => {
          return res.json();
      })
  }

  return {
      getTodos,
      deleteTodo,
      addTodo,
      editTodo
  }
})()

const Model = (() => {
  class State {
      #todos;
      #completeTodo
      #unfinishedTodo
      #onChangeCb;
      constructor() {
          this.#todos = [];
          this.#onChangeCb = () => {}
      }
      get todos() {
          return this.#todos
      }
      set todos(newTodos) {
          this.#todos = newTodos
          this.#onChangeCb();
      }

      // append to top
      get unfinishedTodo() {
        return this.#unfinishedTodo;
      }

      set unfinishedTodos(unfinishedTodo) {
        this.#unfinishedTodo = unfinishedTodo;
      }

      // complete state todo should be on bottom..
      get completeTodo() {
        return this.#completeTodo;
      }

      set completeTodo(completeTodo) {
        this.#completeTodo = completeTodo;
      }

      subscribe = (cb) => {
          this.#onChangeCb = cb;
      }
  }
  return {
      State
  }

})();



const View = (() => {
  const formEl = document.querySelector(".todo__form");
  const todoListEl = document.querySelector(".todo__list");
  const renderTodolist = (todos) => {
      let template = "";
      todos.sort((a,b)=>b.id-a.id).forEach((todo) => {
          template += `
              <li class="todo--item" id=${todo.id}><span id=${todo.id}>${todo.content}
              <input type="text" style="display:none" value="${todo.content}">
              </span>
              <span>
              <button class="btn--edit" id="${todo.id}">Edit</button>
              <button class="btn--delete" id="${todo.id}">Delete</button>
              </span>
              </li>
          `
      })
      todoListEl.innerHTML = template;
  }
  return {
      formEl,
      renderTodolist,
      todoListEl
  }
})();



const ViewModel = ((Model, View) => {
  const state = new Model.State();

  const addTodo = () => {
      View.formEl.addEventListener("submit", (event) => {
          event.preventDefault();
          const content = event.target[0].value;
          const status = false;
          if(content.trim() === "") return;
          const newTodo = { content, status }
          APIs.addTodo(newTodo).then(res => {
              state.todos = [res, ...state.todos];
          })

      })
  }

  // todo
  const toggleEdit = () => {
    View.todoListEl.addEventListener("click", (event) => {
      const { id } = event.target;
      if (event.target.className === "btn--edit") {
        console.log(id);
        let selectedSpan = document.getElementById(id);
        let input = document.createElement("input");
        selectedSpan.style.display = "none";
        selectedSpan.parentNode.insertBefore(input, selectedSpan);
      }
    })
  }

  // toggle state of todo to complete / not complete
  const toggleComplete = () => {
    View.todoListEl.addEventListener("click", (event) => {
      const { id } = event.target;
      if (event.target.className === "todo--item") {
        let selectedSpan = document.getElementById(id);
        // if true line-through else none
        // selectedSpan.style.textDecoration = "line-through";
        let updatedTodo = state.todos.forEach(todo => {
          //console.log(+todo.id === +id)
          if (+todo.id === +id) {
            todo.status = true;
          }
        })
        console.log(updatedTodo);
        APIs.editTodo(id, state.todos);
        console.log(state.todos)
      }
    })
  }

  const deleteTodo = () => {
      View.todoListEl.addEventListener("click", (event) => {
          console.log(event.currentTarget, event.target)
          const { id } = event.target
          if (event.target.className === "btn--delete") {
              APIs.deleteTodo(id).then(res => {
                  console.log("Res", res);
                  state.todos = state.todos.filter((todo) => {
                      return +todo.id !== +id
                  });
              });
          }
      })
  }

  const getTodos = ()=>{
      APIs.getTodos().then(res=>{
          state.todos = res;
      })
  }

  const bootstrap = () => {
      addTodo();
      deleteTodo();
      getTodos();
      toggleEdit();
      toggleComplete();
      state.subscribe(() => {
          View.renderTodolist(state.todos)
      });
  }
  return {
      bootstrap
  }
})(Model, View);

ViewModel.bootstrap();