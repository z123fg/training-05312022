const APIs = (() => {
    const URL = "http://localhost:3000/todos";

    // HTTP GET 
    const getTodos = () => {
        return fetch(`${URL}`).then((res) => {
            return res.json();
        })
    }

    // HTTP POST
    const addTodo = (newTodo) => {
        return fetch(`${URL}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        }).then((res) => {
            return res.json();
        })
    }

    // HTTP PATCH
    const editTodo = (updatedTodo) => {
        return fetch(`${URL}/${updatedTodo.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTodo)
        }).then((res) => {
            return res.json();
        })
    }


    // HTTP DELETE
    const deleteTodo = (id) => {
        return fetch(`${URL}/${id}`, {
            method: "DELETE"
        }).then((res) => {
            return res.json();
        })
    };

    return {
        getTodos,
        addTodo,
        editTodo,
        deleteTodo,
    }

})();

/**
 * data structure:
 * [
 *     {
          "id": 1, 
          "content": "standup meeting", 
          "complete": false
        },
    
        {
          "id": 2, 
          "content": "catch-up meeting", 
          "complete": false
        }
 * ]
 */
const Model =(() => {
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


const View = (() => {
    const formEl = document.querySelector(".todo__form");
    const todoListEl = document.querySelector(".todo__list");

    const renderTodolist = (todos) => {
        let template = "";
        todos.sort((a,b)=> b.id - a.id).forEach((todo) => {
            template += `
                <li id="${todo.id}">
                  <span>
                     ${todo.content}
                  </span>
                  <button class="btn--edit" id="todo-${todo.id}">Edit</button>
                  <button class="btn--delete">Delete</button>
                </li>
            `
        })
        todoListEl.innerHTML = template;
    }
    return {
        formEl,
        todoListEl,
        renderTodolist
    }

})(); 


const ViewModel = ((Model, View) => {
    const state = new Model.State();

    const getTodos = () => {
        APIs.getTodos().then(data => {
            state.todos = data;
        })
    }

    const addTodo = () => {
        View.formEl.addEventListener("submit", (event) => {
            event.preventDefault();
            const content = event.target[0].value;
            const complete = false;
            if(content.trim() === "") return;

            const newTodo = { content, complete };
            
            APIs.addTodo(newTodo).then(res => {
                state.todos = [res, ...state.todos];
            })

            event.target[0].value = "";
            
        })
    }
    

    const editTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            const id = event.target.id.split("-")[1];
              
            const editTodoItem = state.todos.find((todo) => +todo.id === +id)

            const editSpanEl = event.target.previousElementSibling;
            if (event.target.textContent === "Edit") {
                event.target.textContent = "Save"
                editSpanEl.innerHTML = `
                <input type="text" value="${editTodoItem.content}" />
                `
                // need to fiugre out how to save the user input and send it to the API
            }
        })
    }

    // NEED TO figure out how to get the user input value and send the updatedItem back to the API
    // const saveEditTodo = () => {
    //     View.todoListEl.addEventListener("submit", (event) => {
    //         console.log(event.target);
    //         debugger
// 
    //     })
// 
    // }

    const deleteTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            const id = event.target.parentElement.id;
            
            if (event.target.className === "btn--delete") {
                APIs.deleteTodo(id).then(res => {
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +id
                    });
                });
            }
        })
    
    }

     const toggleTodo = () => {
         View.todoListEl.addEventListener("click", (event) => {
             const id = event.target.parentElement.id;
             const toggleTodoItem = state.todos.find((todo) => +todo.id === +id)
             // const idx = state.todos.findIndex((todo) => todo.id === toggleTodoItem.id)
              if (toggleTodoItem.complete === false && event.target.nodeName == "SPAN"){
                 event.target.className = "strike";
                 
                 // here still need to figure out how to handle API PATCH request
                 // toggleTodoItem.complete = true;
                 // APIs.editTodo(toggleTodoItem).then(res => {
                 //     state.todos = [...state.todos.slice(0, idx), res, ...state.todos.slice(idx + 1)];
                 // })
              }
             
         })
     }

    
    const bootstrap = () => {
        getTodos();
        addTodo();
        editTodo();
        // saveEditTodo();
        deleteTodo();
        toggleTodo();
        state.subscirbe(() => {
            View.renderTodolist(state.todos)
        });
    }


    return {
        bootstrap
    }

})(Model, View);

ViewModel.bootstrap();