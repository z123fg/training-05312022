// -- API SECTION -- //
const APIs = (() => {
    // url for the database provided //
    const URL = "http://localhost:3000/todos";
    // -- ADD -- //
    // this function adds new items to the database using fetch method post //
    const addTodos = (newTodos) => {
        return fetch(URL, {
            method: "POST",
            body: JSON.stringify(newTodos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json();
        })
    }
    // -- DELETE -- //
    // this function removes items from the database using fetch method delete //
    const deleteTodos = (id) => {
        return fetch(`${URL}/${id}`, {
            method: "DELETE"
        }).then((response) => {
            return response.json();
        })
    };
    // -- UPDATE -- //
    // this function updates the text of existing items in the databse using fetch method put //
    const updateTodos = (id, newTodos) => {
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(newTodos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json();
        })
    }
    // -- COMPLETE -- //
    // this function updates the status of existing items in the database using fetch method put //
    const completeTodo = (id, newTodos) => {
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(newTodos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json();
        })
    }
    // -- GET -- //
    // this function receives information from the database using fetch //
    const getTodos = () => {
        return fetch(`${URL}`).then((response) => {
            return response.json();
        })
    }
    // all functions returned here //
    return {
        getTodos,
        deleteTodos,
        addTodos,
        updateTodos,
        completeTodo
    }
})()
// -- MODEL SECTION -- //
// iife that is part of the mvvm design pattern - controls data //
const Model = (() => {
    // -- STATE CLASS -- //
    // this class is responsible for our data //
    class State {
        // -- #TODOS -- //
        // this is the data we store, mutate, and display for the page //
        #todos;
        // -- #ONCHANGECB -- //
        // this function is used to refresh the page whenever todos is changed //
        #onChangeCb;
        // -- CONSTRUCTOR -- //
        constructor() {
            // initializing todos to an empty array //
            this.#todos = [];
            // initializing onchangecb to an empty array //
            this.#onChangeCb = () => { }
        }
        // -- GETTER FUNCTION -- //
        // this function returns the private variable todos //
        get todos() {
            return this.#todos
        }
        // -- SETTER FUNCTION -- //
        // this function updates todos with a new value and calls onchangecb //
        set todos(newTodos) {
            this.#todos = newTodos
            this.#onChangeCb();
        }
        // -- SUBSCRIBE FUNCTION -- //
        // this function sets the onchangecb function to whatever is passed to it //
        subscribe = (cb) => {
            this.#onChangeCb = cb;
        }
    }
    // state is the only thing returned as it is the only thing in the class //
    return {
        State
    }

})();

// -- VIEW SECTION -- //
// iife that is part of the mvvm design pattern - controls how the data is presented //
const View = (() => {
    // -- FORMELEMENT -- //
    // element that selects the todo form so an event listener can be placed //
    const formElement = document.querySelector(".todo__form");
    // -- TODOLISTELEMENTINCOMPLETE -- //
    // element that selects the top unordered list (tasks that have not been completed) //
    const todoListElementIncomplete = document.querySelector(".todo_list--incomplete");
    // -- TODOLISTELEMENTCOMPLETE -- //
    // element that selects the bottom unordered list (tasks that have been completed) //
    const todoListElementComplete = document.querySelector(".todo_list--complete");
    // -- RENDERTODOSLIST FUNCTION -- //
    /* this function takes the todos and dynamically adds them to the unordered lists **
    ** so that they can be changed and displayed properly                             */
    const renderTodosList = (todos) => {
        // -- INCOMPLETETASKS -- //
        // variable that will contain all of our incomplete tasks for displaying //
        let incomepleteTasks = "";
        // -- COMPLETEDTASKS -- //
        // variable that will contain all of our completed tasks for displaying //
        let completedTasks = "";
        // -- INCOMPLETELIST -- //
        // variable that contains the raw data of all incomplete tasks //
        const incompleteList = todos.filter((e) => !e.complete);
        incompleteList
        // sorting from highest id to lowest id //
        .sort((a, b) => b.id - a.id)
        // looping through the raw data and turning it html-ready //
        .forEach((todo) => {
            incomepleteTasks += `
                <li>
                    <div class="todo__content" id='content${todo.id}'>
                        <span id="span-${todo.id}" >
                        ${todo.content}
                        </span>
                    </div>
                    <button class="btn--edit" id="edit-${todo.id}">
                    <i id="${todo.id}" class="fa-solid fa-pencil"></i>
                    </button>
                    <button class="btn--delete" id="${todo.id}">
                    <i id="${todo.id}" class="fa-solid fa-trash"></i>
                    </button>
                </li>
            `
        })
        // -- COMPLETEDLIST -- //
        // variable that contains the raw data of all completed tasks //
        const completedList = todos.filter((e) => e.complete);
        completedList
        // sorting from highest id to lowest id //
        .sort((a, b) => b.id - a.id)
        // looping through the raw data and turning it html-ready //
        .forEach((todo) => {
            completedTasks += `
                <li>
                    <div class="todo__content" id='content${todo.id}'>
                        <span id="span-${todo.id}" class="todo__content-complete"}>
                        ${todo.content}
                        </span>
                    </div>
                    <button class="btn--delete" id="${todo.id}">
                    <i id="${todo.id}" class="fa-solid fa-trash"></i>
                    </button>
                </li>
            `
        })
        // this will append our html-ready data to its appropriate list //
        todoListElementIncomplete.innerHTML = incomepleteTasks;
        // this will append our html-ready data to its appropriate list //
        todoListElementComplete.innerHTML = completedTasks;
    }
    // the three variables being returned are so that they can have event listeners added //
    return {
        formElement,
        renderTodosList,
        todoListElementIncomplete,
        todoListElementComplete
    }
})();

// -- VIEWMODEL SECTION -- //
// iife that is part of the mvvm design pattern - controls how the data is mutated //
const ViewModel = ((Model, View) => {
    // -- STATE -- //
    // this state variable is from our model section so we can access its variables //
    const state = new Model.State();
    // -- ADDTODOS FUNCTION -- //
    // this function will send data to the database when the form is submitted //
    const addTodos = () => {
        // targeting the formelement section of html to do something on submit //
        View.formElement.addEventListener("submit", (event) => {
            // stops page from refreshing automatically //
            event.preventDefault();
            // -- CONTENT -- //
            // this variable takes in the content that the user inputted from the form //
            const content = event.target[0].value;
            // this if statement stops tasks with no content from being created //
            if (content.trim() === "") return;
            // -- NEWTODO -- //
            // this variable adds the complete key so that the element can be toggled //
            const newTodo = { content, complete: false }
            // data is sent to the api so it can be added to the database //
            APIs.addTodos(newTodo).then((response) => {
                // data is also added locally to the list //
                state.todos = [response, ...state.todos];
            })

        })
    }
    // -- DELETETODOS -- //
    // this function will remove data from the database when the delete button is clicked //
    const deleteTodos = () => {
        // -- DELETEHANDLER -- //
        // this function will delete data from either list when the button is pressed //
        const deleteHandler = (event) => {
            // -- { ID } -- //
            // this variable is the id associated with the list item that has been clicked //
            const { id } = event.target;
            // if statement checks to see if the icon has been clicked or the edge of the button //
            if (event.target.className === "btn--delete" || event.target.className === "fa-solid fa-trash") {
                APIs.deleteTodos(id).then((r) => {
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +dataId;
                    });
                });
            }
        };
        View.todoListElementIncomplete.addEventListener("click", deleteHandler);
        View.todoListElementComplete.addEventListener("click", deleteHandler);
    }

    const updateTodos = () => {
        View.todoListElementIncomplete.addEventListener("click", (event) => {
            const dataId = event.target.getAttribute("data-id")
            const content = event.currentTarget.querySelector("#content" + dataId);
            
            if (event.target.className === "btn--edit" || event.target.className === "fa-solid fa-pencil") {
                if (content.querySelector('span')) {
                    content.innerHTML = `<input type='text' value='${content.querySelector('span').textContent.trim()}'></input>`;
                } else {
                    const newTodos = content.querySelector('input').value;
                    if (newTodos.trim() === "") return;
                    content.innerHTML = `<span data-id=${dataId}>${newTodos}</span>`;
                    APIs.updateTodos(dataId, {content: newTodos, complete: false})
                    .then((r) => {
                        state.todos = state.todos.filter((todo) => {
                            return +todo.id !== +dataId
                        })
                    })
                }
            }

            if(event.target.tagName.toLowerCase() === "span") {
                APIs.completeTodo(dataId, {complete: true})
                .then((r) => {
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +dataId
                    })
                })
            }
        })


        View.todoListElementComplete.addEventListener('click', (event) => {
            const dataId = event.target.getAttribute('data-id')
            if(event.target.tagName.toLowerCase() === 'span') {
                APIs.completeTodo(dataId, {complete: false})
                .then((r) => {
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +dataId
                    })
                })
            }
        })
    }

    const getTodos = () => {
        APIs.getTodos().then((response) => {
            state.todos = response;
        })
    }

    const bootstrap = () => {
        addTodos();
        deleteTodos();
        getTodos();
        updateTodos();
        state.subscribe(() => {
            View.renderTodosList(state.todos)
        });
    }
    return {
        bootstrap
    }
})(Model, View);

ViewModel.bootstrap();
