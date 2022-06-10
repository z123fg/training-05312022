/*
API Function will fetch the data from the api and persist the data on the page
*/

const APIs = (() => {
    const URL = "http://localhost:3000/todos";

    // Adding a todo 
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

// Deleting the todo
    const deleteTodo = (id) => {
        return fetch(`${URL}/${id}`, {
            method: "DELETE"
        }).then((res) => {
            return res.json();
        })
    };

    // fetching all the todos
    const getTodos = () => {
        return fetch(`${URL}`).then((res) => {
            return res.json();
        })
    }

   // Edit todo 
   const editTodo = (id, updatedTodo) => {
       return fetch(`${URL}/${id}`, {
           method: "PUT",
           body: JSON.stringify(updatedTodo),
           headers: {
            'Content-Type': 'application/json'
           }
       }).then((res) => {
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



/*
 Model will hold the state of the entire application

 */

 const Model = (() => {
    class State {
        #todos;
        #onChangeCb;
        constructor() {
            this.#todos = [];
            this.#onChangeCb = () => { }
        }
        get todos() {
            return this.#todos
        }
        set todos(newTodos) {
            this.#todos = newTodos
            this.#onChangeCb();
        }

        subscirbe = (cb) => {
            this.#onChangeCb = cb;
        }
    }
    return {
        State
    }

})();


 /*
  View will hold all the UI rendering when a task gets added, Deleted, or edited.
  */

  const View = (() => {
    // Here we are quering the dom on out HTML 
     const formEl = document.querySelector(".todo__form");
     const todoListEl = document.querySelector(".todo__list");
    
    // This function will render the todoList
     const renderTodolist = (todos) => {
         let template = "";
         todos.sort((a,b)=>b.id-a.id).forEach((todo) => {
             template += `
                 <li>
                 <span>${todo.content}</span>
                 <button class="btn--delete" id="${todo.id}">Delete</button>
                 <button class="btn--edit" id="${todo.id}" >Edit</button>
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


  /*
  View Model will handle all the logic of the application
  */

  const ViewModel =((Model, View) => {
    const state = new Model.State();

    const addTodo = () => {
        View.formEl.addEventListener("submit", (event) => {
            event.preventDefault();
            const content = event.target[0].value;

            if(content.trim() === "") return;

            const newTodo = { content }

            APIs.addTodo(newTodo).then(res => {
                state.todos = [res, ...state.todos]
            }) 
        })
    }

    const deleteTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            console.log(event.currentTarget, event.target)
            const { id } = event.target;
            console.log({ id })
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

    const getTodos = () => {
        APIs.getTodos().then(res => {
            state.todos = res;
        })
    }

    const editTodo = () => {
        View.formEl.addEventListener("click", (event) => {
            const { id } = event.target;
            if(event.target.className === "btn--edit"){
                APIs.editTodo(id, updatedTodo).then(res => {
                    
                })
            }
        })
    }

    const bootstrap = () => {
        deleteTodo();
        getTodos();
        addTodo();
        state.subscirbe(() => {
            View.renderTodolist(state.todos)
        });
    }

    return {
        bootstrap
    }

  })(Model, View);

  ViewModel.bootstrap();

