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

    // need to write a conditional statement to check if the boolean value of the todo.complete
    const renderTodolist = (todos) => {
        let template = "";
        todos.sort((a,b)=> b.id - a.id).forEach((todo) => {
            template += `
                <li id="${todo.id}">
                  <span id="span-${todo.id}"
                  class=${todo.complete === false ? "hidden" : "strike"}>
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
            
            createEditField = () => {
              
                const id = event.target.id.split("-")[1];   
                
                const editTodoItem = state.todos.find((todo) => todo.id == id)
                const editSpanEl = event.target.previousElementSibling;
                editSpanEl.innerHTML = `
                <input type="text" value="${editTodoItem.content}" id="edit-field"/>
                `
            }

            updateTodo = () => {
                const id = event.target.id.split("-")[1];              
                const editTodoItem = state.todos.find((todo) => +todo.id === +id)
                const editedTodo = document.querySelector("#edit-field").value
                
                let updatedTodoItem = {...editTodoItem, content: `${editedTodo}`}
                APIs.editTodo(updatedTodoItem)

                const editSpanEl = event.target.previousElementSibling;
                editSpanEl.innerHTML = `
                <span>${updatedTodoItem.content}</span>
                `
            }

            toggleTodo = () => {
                const id = event.target.id.split("-")[1];  
                console.log(id);             
                const toggleTodoItem = state.todos.find((todo) => +todo.id === +id)
                console.log(toggleTodoItem)
                const editSpanEl = event.target;
                if (toggleTodoItem.complete === false){
                    editSpanEl.className = "strike";
                    let updatedTodoItem = {...toggleTodoItem, complete: true}
                    APIs.editTodo(updatedTodoItem)
                } 
            }


            if (event.target.textContent === "Edit") {
                event.target.textContent = "Save";
                createEditField();
            } else if (event.target.textContent === "Save") {
                event.target.textContent = "Edit";
                updateTodo();
            } else if (event.target.nodeName == "SPAN") {
                toggleTodo();
            }
            
        })
    }

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
    
    const bootstrap = () => {
        getTodos();
        addTodo();
        editTodo();
        deleteTodo();
        state.subscirbe(() => {
            View.renderTodolist(state.todos)
        });
    }


    return {
        bootstrap
    }

})(Model, View);

ViewModel.bootstrap();