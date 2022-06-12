var testVal = 0;
var statusDone = [];

//These are the web API's
const APIs = (() => {
    //This is the url to get to the backend 
    const URL = "http://localhost:3000/todos";

    //web api to add an item on the todo list
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

    //web api to delete an item on the todo list
    const deleteTodo = (id) => {
        return fetch(`${URL}/${id}`, {
            method: "DELETE"
        }).then((res) => {
            return res.json();
        })
    };

    //web api to edit an item on the todo list
    const editTodo = (id, content) => {
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
    const updateStatus = (id) => {
        return fetch(`${URL}/${id}`, {
            method: "PATCH"
        }).then((res) => {
            return res.json();
        })
    }

    //web api to get an item on the todo list
    const getTodos = () => {
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
    //state class
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

        //setter function for state status
        set status(status) {
            this.#status = status;
            this.#onChangeCb();
        }

        //setter function for editing value 
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
    //variables for the indifidual forms and the entire list itself.
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
            if (statusDone.length !== 0)
            {
                console.log("in first if statement");
                for (var i = 0; i < statusDone.length; i++)
                {
                    console.log("In for loop");
                    if (statusDone[i] == todo.id)
                    {
                        isActive = false;
                    }
                }
            }
            if (isActive == false)
            {
                template += `
                 <li>
                 <span style = "text-decoration:line-through;">${todo.content}</span>
                 <button class="btn--delete" id="${todo.id}">Delete</button>
                 </li>
             `
            }
            else
            {
            if(todo.id == testVal)
                {
                    template += `
                   <li>
                    <input placeholder = "${todo.content}" id = "editItem"></input>
                    <button class="btn--done" id="${todo.id}">Done</button>
                    </li>
                `
                }
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
        View.formEl.addEventListener("submit", (event) => {
            //console.log(event);
            //console.log(event.currentTarget, event.target)
            event.preventDefault();
            const content = event.target[0].value;
            console.log(content);
            const status = false;
            if(content.trim() === "") return;
            const newTodo = { content }
            console.log(newTodo);
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
            const { id } = event.target;
            //console.log(id);
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

    //edits an item from the todo list
    const editTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            //console.log("We are in edit");
            //console.log(event);
            
            const { id } = event.target;
            //const content= filter(id);
            //console.log(event.target);
            //console.log(content);
            //console.log(id);
            if (event.target.className === "btn--edit"){
                testVal = id;
                console.log(testVal);
                View.renderTodolist(state.todos);
            }

            if(event.target.className === "btn--done")
            {
                const content = document.getElementById("editItem").value;
                APIs.editTodo(id, content).then (res => {
                    testVal = 0;
                    const itemIndex = state.todos.findIndex(todo => todo.id == id);
                    state.todos[itemIndex].content = res.content;
                    View.renderTodolist(state.todos);
                })
            }
        })
    }

    //updates completion status of an item from the todolist
    const updateStatus = () => {
        View.todoListEl.addEventListener("click", (event) => {
            const {id} = event.target;
            if (event.target.className == "status--change")
            {
                APIs.updateStatus(id).then (res => {
                    statusDone.push(id);
                    console.log(statusDone);
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


