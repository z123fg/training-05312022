let myArray;

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
    const alert = document.querySelector(".todo--alert"); 
    const loadMore = document.querySelector(".btn--load");

    const renderTodolist = (todos) => {
        let template = "";
        todos.forEach((todo) => {
            template += `
                <li data-id="${todo.id}">
                  <span
                  class=${todo.complete === false ? "hidden" : "strike"}>
                     ${todo.content}
                  </span>
                  <button type="button" class="btn--edit">EDIT</button>
                  <button type="button" class="btn--delete">DELETE</button>
                </li>
            `
        })
        todoListEl.innerHTML = template;
    }
    return {
        formEl,
        todoListEl,
        alert,
        loadMore,
        renderTodolist
    }

})(); 


const ViewModel = ((Model, View) => {
    const state = new Model.State();

    const getTodos = () => {
        APIs.getTodos().then(data => {
            myArray = data;
            state.todos = myArray.slice(0, 5);
            myArray.splice(0, 5);
            // check if the todo list is empty or not
            if (state.todos.length === 0) {
                displayAlert("No Active Task", 'danger');
            }
        })
    }

    const addTodo = () => {
        View.formEl.addEventListener("submit", (event) => {
            event.preventDefault();
            let content = event.target[0].value;
            let complete = false;

            if(content.trim() === "") {
               displayAlert("Please enter a task.", "danger");
               return;
            };

            const newTodo = { content, complete };
            
            APIs.addTodo(newTodo).then(res => {
                state.todos = [res, ...state.todos];
            })
            displayAlert("A task has been created", "success");
            event.target[0].value = "";
            
        })
    }
    
    // MODIFY a task - edit content / delete a task / toggle status
    const editTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {

            deleteTodo = () => {
                const id = event.target.parentElement.dataset.id; 
                APIs.deleteTodo(id).then(data => state.todos = state.todos.filter(todo => +todo.id !== +id))
            }


            toggleTodo = () => {
                const id = event.target.parentElement.dataset.id;              
                const toggleTodoItem = state.todos.find((todo) => todo.id == id)
                const editSpanEl = event.target;

                if (toggleTodoItem.complete && event.target.className === "strike") {
                    displayAlert("Task Already Completed", "danger");
                    return;
                } else if (!toggleTodoItem.complete && event.target.className === "hidden") {
                    toggleTodoItem.complete = true;
                    const toggledItem = {...toggleTodoItem, complete: true};
                    APIs.editTodo(toggledItem).then(data => {
                        const idx = state.todos.findIndex((todo) => +todo.id === +id)
                        state.todos = [...state.todos.slice(0, idx), data, ...state.todos.slice(idx + 1)];
                    });
                    editSpanEl.classList.remove("hidden");
                    editSpanEl.classList.add("strike");
                    displayAlert("Task Completed", "success");
                }
            }

            // create an edit field
            createEditField = () => {
                const id = event.target.parentElement.dataset.id;
                const editTodoItem = state.todos.find(todo => todo.id == id);
                const editSpanEl = event.target.previousElementSibling;

                if (editTodoItem.complete) {
                    displayAlert("Completed Task Cannot be edited", "danger")
                    event.target.textContent = "EDIT"
                    return;
                } else {
                    editSpanEl.innerHTML = `
                    <input type="text" value="${editTodoItem.content}" id="edit-field" />
                    `
                }
            }
            
            
            updateTodo = () => {
                const id = event.target.parentElement.dataset.id;
                const editTodoItem = state.todos.find(todo => todo.id == id);
                const editedTodo = document.querySelector("#edit-field").value
                
                let updatedTodoItem = {...editTodoItem, content: `${editedTodo}`}
                APIs.editTodo(updatedTodoItem).then(data => {
                    const idx = state.todos.findIndex((todo) => +todo.id === +id);
                    return state.todos = [...state.todos.slice(0, idx), data, ...state.todos.slice(idx + 1)]; 
                });

                const editSpanEl = event.target.previousElementSibling;
                editSpanEl.innerHTML = `
                <span>${updatedTodoItem.content}</span>
                `
                editSpanEl.classList.add("hidden");
                displayAlert("Task has been successfully updated.", "success")
            }


            if (event.target.className === "btn--delete") {
                deleteTodo();
                displayAlert("A task has been deleted.", "danger");
            } else if (event.target.textContent === "EDIT") {
                event.target.textContent = "SAVE";
                createEditField();
            } else if (event.target.textContent === "SAVE") {
                event.target.textContent = "EDIT";
                updateTodo();
            } 
            
            else if (event.target.className === "hidden" || event.target.className === "strike") {
                toggleTodo();
            }
        })

    }

    // load more
    const loadMore = () => {
        let currentIndex = 0;
        View.loadMore.addEventListener("click", (event) => {
            event.preventDefault();
            let maxResult = 5;
            for (let i = 0; i < maxResult; i++) {
                if (currentIndex > myArray.length) {
                    event.target.className = "hide";
                }
               state.todos = [...state.todos, myArray[i+currentIndex]]
            }
            currentIndex += maxResult;      
        })
    }
 
    // add a text alert functionality
    const displayAlert = (alertText, action) => {
        View.alert.textContent = alertText;
        View.alert.classList.add(`alert-${action}`);

        // remove text alert after 1 seconds
         setTimeout(function(){
             View.alert.textContent = "";
             View.alert.classList.remove(`alert-${action}`);
         }, 1000)
    }

    
    const bootstrap = () => {
        getTodos();
        addTodo();
        editTodo();
        loadMore();
        state.subscirbe(() => {
            View.renderTodolist(state.todos)
        });
    }


    return {
        bootstrap,
    }

})(Model, View);

ViewModel.bootstrap();