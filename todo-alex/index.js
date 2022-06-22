var testVal = 0;
var statusDone = [];

//These are the web API's
const APIs = (() => {
    //This is the url to get to the backend 
    const URL = "http://localhost:3000/todos";

    //web api to add an item on the todo list
    const addTodo = (newTodos) => {
        //fetches url and puts new string/id in json file.
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

    //web api to delete an item on the todo list
    const deleteTodo = (id) => {
        //fetches url and id and deletes item with said id
        return fetch(`${URL}/${id}`, {
            method: "DELETE"
        }).then((res) => {
            return res.json();
        })
    };

    //web api to edit an item on the todo list
    const editTodo = (id, content) => {
        //fetchs url and id and puts in new content at id.
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify({ id, content }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json();
        })
    }

    //web api to update status of an item on the todo list
    const updateStatus = (id, status) => {
        //fetches url and id and intended to update status of id.
        return fetch(`${URL}/${id}`, {
            method: "PATCH",
            body: JSON.stringify({id, status}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json();
        })
    }

    //web api to get an item on the todo list
    const getTodos = () => {
        //fetches url and returns entire json file
        return fetch(`${URL}`).then((res) => {
            return res.json();
        })
    }

    //retruns web apis
    return {
        getTodos,
        deleteTodo,
        addTodo,
        editTodo,
        updateStatus
    }
})()




/* 
    closure, IIFE
    event bubbling, event capturing
    json server
*/

//This is the model for the back-end
const Model = (() => {
    //states class
    class State {
        //local variable for the state class
        #todos;
        #status;
        #editing;
        #onChangeCb;
        
        //constructor for the state class
        constructor() {
            this.#todos = [];
            this.#status = false;
            this.#editing = 0;
            this.#onChangeCb = () => { }
        }

        //getter function for the state class
        get todos() {
            return this.#todos
        }

        //setter function for the state class
        set todos(newTodos) {
            this.#todos = newTodos
            this.#status;
            this.#editing;
            this.#onChangeCb();
        }

        //setter function intended for state status
        set status(status) {
            this.#status = status;
            this.#onChangeCb();
        }

        //setter function intended for editing value 
        set editing(editing){
            this.#editing = editing;
            this.#onChangeCb();
        }

        //intiates call back on the onChangeCb variable only when cb is observable
        subscirbe = (cb) => {
            this.#onChangeCb = cb;
        }
    }
    return {
        State
    }

})();

/* 
    [
        {content:"work",id:1},
        {content:"eat",id:2}
    ]
*/

//Renders webpage view
const View = (() => {
    //variables for the inditifiable forms and the entire list itself.
    const formEl = document.querySelector(".todo__form");
    const todoListEl = document.querySelector(".todo__list");

    //renders each state change
    const renderTodolist = (todos) => {
        //variable to set up html
        let template = "";
        console.log(testVal);
        //console.log(todos); 
        //sorts through everything in the todo list, and makes it appear on the user's end.
        todos.sort((a,b)=>b.id-a.id).forEach((todo) => {
            //console.log(testVal);
            //console.log(todo.id);
            var isActive = true;
            //console.log(todo.content)
            //console.log(todo.id);
            
            //checks the length of status length array and
            //sees finds the values in said array.
            //runs only if task is no longer active (NOT FINISHED)
            if (todo.status === false)
            {
                //checks if the value is currently being edited.
                if(todo.id == testVal)
                {
                    template += `
                    <li>
                    <input placeholder = "${todo.content}" id = "editItem"></input>
                    <button class="btn--done" id="${todo.id}">Done</button>
                    </li>
                    `
                }
                //draws everything else
                else
                {
                template += `
                    <li>
                    <span class="status--change" id = ${todo.id}>${todo.content}</span>
                    <button class="btn--edit" content = "${todo.content}" id="${todo.id}">Edit</button>
                    <button class="btn--delete" id="${todo.id}">Delete</button>
                    </li>
                    `
                }
            }

            //replaces element's desendants with nodes
            todoListEl.innerHTML = template;
        })

        template += "<br>";

        todos.sort((a,b)=>b.id-a.id).forEach((todo) => {
            //console.log(testVal);
            //console.log(todo.id);
            var isActive = true;
            //console.log(todo.content)
            //console.log(todo.id);
            
            //checks the length of status length array and
            //sees finds the values in said array.
            //runs only if task is no longer active (NOT FINISHED)
            if (todo.status === true)
            {
                template += `
                 <li>
                 <span style = "text-decoration:line-through;">${todo.content}</span>
                 <button class="btn--delete" id="${todo.id}">Delete</button>
                 </li>
             `
            }

            //replaces element's desendants with nodes
            todoListEl.innerHTML = template;
        })
    }
    //returns elements from view
    return {
        formEl,
        renderTodolist,
        todoListEl
    }
})();


//connects front-end to back end
const ViewModel = ((Model, View) => {
    //constructs state of model
    const state = new Model.State();

    //adds an item to the todolist
    const addTodo = () => {
        //looks up event of form
        View.formEl.addEventListener("submit", (event) => {
            //console.log(event);
            //console.log(event.currentTarget, event.target)

            //tells handler that if an event is not explicitly handled,
            //its default actoin should not be taken as it normally would.
            event.preventDefault();

            //gets content from target
            const content = event.target[0].value;
            event.target[0].value = '';
            console.log(content);

            //attempts to set status (NOT FINISHED)
            const status = false;

            //trims content
            if(content.trim() === "") return;

            //sets newTodo to json content
            const newTodo = { content,status }
            console.log(newTodo);

            //adds newTodo to json through api, and adds todo into state.
            APIs.addTodo(newTodo).then(res => {
                // console.log("Res", res);
                console.log(res);
                console.log(state.todos);
                //res.status(false);
                console.log(res);
                state.todos = [res, ...state.todos];//anti-pattern
            })

        })
    }

    //deletes and item from the todo list
    const deleteTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            //console.log(todoListEl);
            console.log(event);
            console.log(event.target)

            //sets json id to target id.
            const { id } = event.target;
            //console.log(id);

            //checks if the button event has the delete class
            if (event.target.className === "btn--delete") {
                //runs delete API, and removes item from todos state
                APIs.deleteTodo(id).then(res => {
                    console.log("Res", res);
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +id
                    });
                });
            }
        })
    }

    //edits an item from the todo list
    const editTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            //console.log("We are in edit");
            //console.log(event);
            
            //sets id to event id
            const { id } = event.target;
            //const content= filter(id);
            //console.log(event.target);
            //console.log(content);
            //console.log(id);

            //checks if button clicked is the edit button
            if (event.target.className === "btn--edit"){
                //changes testVal global for drawing reference, and
                //renders list
                testVal = id;
                console.log(testVal);
                View.renderTodolist(state.todos);
            }

            //checks if button clicked is the donw button
            if(event.target.className === "btn--done")
            {
                //gets new content that user inputed
                const content = document.getElementById("editItem").value;

                //calls edit api, gets the item index from the list, and 
                //replaces original string with new string.
                APIs.editTodo(id, content).then (res => {
                    testVal = 0;
                    const itemIndex = state.todos.findIndex(todo => todo.id == id);
                    state.todos[itemIndex].content = res.content;
                    View.renderTodolist(state.todos);
                })
            }
        })
    }

    //updates completion status of an item from the todolist (NOT FINISHED)
    const updateStatus = () => {
        View.todoListEl.addEventListener("click", (event) => {
            //sets id to target id
            const {id} = event.target;

            //checks if tasked was clicked on to change status 
            if (event.target.className == "status--change")
            {
                const status = true;
                //calls updateStatus api and updates the status of todo (NOT FINISHED)
                APIs.updateStatus(id, status).then (res => {
                    //statusDone.push(id);
                    //console.log(statusDone);

                    const itemIndex = state.todos.findIndex(todo => todo.id == id);
                    state.todos[itemIndex].status = true;
                    View.renderTodolist(state.todos);
                })
            }
        })
    }

    //get the todo list
    const getTodos = ()=>{
        APIs.getTodos().then(res=>{
            state.todos = res;
        })
    }

    //sets up bootstrap for all functions 
    const bootstrap = () => {
        addTodo();
        deleteTodo();
        editTodo();
        updateStatus();
        getTodos();
        state.subscirbe(() => {
            View.renderTodolist(state.todos)
        });
    }
    return {
        bootstrap
    }
})(Model, View);

//creates view model with bootstrap
ViewModel.bootstrap();


