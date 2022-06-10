var editable = 0;

//sets up web apis
const APIs = (() =>{
    //local host url
    const URL = "http://localhost:3000/todos";

    //web api for addTodo
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

    //web api for deleteTodo
    const deleteTodo = (id) => {
        return fetch(`${URL}/${id}`, {
            method: "DELETE"
        }).then((res) => {
            return res.json();
        })
    };

    const editTodo = (content, id) => {
        return fetch(`${URL}/${content}/${id}`, {
            method: "PUT"
        }).then((res) => {
            return res.json();
        })
    };

    const doneEdit = (content, id) => {
        return fetch(`${URL}/${content}/${id}`, {
            method: "PUT"
        }).then((res) => {
            return res.json();
        })
    }

    const todoStatus = (id) => {
        return fetch(`${URL}/${id}`, {
            method: "PATCH"
        }).then((res) => {
            return res.json();
        })
    }

    //web api for get todos
    const getTodos = () => {
        return fetch(`${URL}`, {
            method: "GET"
        }).then((res) => {
            return res.json();
        })
    }

    //returns various web apis
    return {
        getTodos,
        deleteTodo,
        editTodo,
        todoStatus,
        addTodo,
        doneEdit
    }
})()


/*
    closure, IIFE
*/

//model for webpage
const Model = (() => {
    //class for the webpage state
    class State {
        //local variables for state
        #todos;
        #onChangeCb;

        //constructor for state
        constructor() {
            this.#todos = [];
            this.#onChangeCb = () => { }
        }

        //getter class for state
        get todos() {
            return this.#todos
        }

        //setter class for state
        set todos(newTodos) {
            this.#todos = newTodos
            this.#onChangeCb();
        }

        //call back function for state
        subscirbe = (cb) => {
            this.#onChangeCb = cb;
        }
    }

    //model returns class
    return {
        State
    }

})();

//view for webpage
const View = (() =>{
    //local variables for view
    const formEl = document.querySelector(".todo__form");
    const todoListEl = document.querySelector(".todo__list");
    //render's webpage view every time state is changed
    const renderTodoList = (todos=>{
        let template = "";
        todos.sort((a,b)=>b.id-a.id).forEach((todo) =>{
            //console.log(editable);
            //console.log("rendering");
            if(todo.id == editable)
            {
                //console.log(todo.id);
                template += `
                <li>
                    <input>${todo.content}</input>
                    <button class="btn--done" content=${todo.content} id=${todo.id}>Done</button>
                </li>`
            }
            else
            {
                template += `
            <li>
                <span>${todo.content}</span>
                <button class="btn--edit" content=${todo.content} id="${todo.id}">Edit</button>
                <button class="btn--delete" id=${todo.id}>Delete</button>
            </li>
            `
            }
            //console.log(todo.id)
        })
        
        todoListEl.innerHTML = template;
    })

    const renderEdit = (todos => {
        let template = "";
        todos.sort((a,b) => b.id-a.id).forEach((todo) => {
            if (todo.id === editable)
            {
                console.log(todo.id);
                template += `
                <li>
                    <input>${todo.content}</input>
                    <button class="btn--done" content=${todo.content} id=${todo.id}>Done</button>
                </li>`
            }
            else
            {
                console.log(todo.content);
                template += `
                <li>
                    <span>${todo.content}</span>
                    <button class="btn--edit" content=${todo.content} id="${todo.id}">Edit</button>
                    <button class="btn--delete" content=${todo.content} id=${todo.id}>Delete</button>
                </li>
            `
            }
        })
        
        todoListEl.innerHTML = template;
    })

    //returns view variables
    return{
        formEl, 
        renderTodoList,
        todoListEl,
        renderEdit
    }
})();

//view model for webpage
const ViewModel = ((Model, View) => {
    //local variable for viewmodel
    const state = new Model.State();
    
    //adds items on todo list
    const addTodo = () => {
        View.formEl.addEventListener("submit", (event) => {
            event.preventDefault();
            const content = event.target[0].value;
            if(content.trim() === "") return;
            const newTodo = { content }
            APIs.addTodo(newTodo).then(res => {
                console.log("Res", res);
                console.log(res.content);
                state.todos = [res, ...state.todos];//anti-pattern
            })

        })
    }

    //deletes items from todo list
    const deleteTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            console.log(event.currentTarget, event.target)
            const { id } = event.target
            console.log(event.target.className);
            if (event.target.className === "btn--delete") {
                APIs.deleteTodo(id).then(res => {
                    console.log("Res", res);
                    state.todos = state.todos.filter((todo) => {
                        console.log(todo.id);
                        return +todo.id !== +id
                    });
                });
            }
        })
    }

    const editTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            console.log(event.currentTarget, event.target)
            const { id } = event.target;
            const content = event.target.getAttribute('content');
            console.log(id);
            console.log(content);
            //const content = event.target.value;
            console.log(event.target.className);
            if (event.target.className === "btn--edit") {
                APIs.editTodo(content, id).then(res => {
                    console.log("Res", res);
                    console.log(res.content);
                    editable = id;
                    //console.log(editable);
                    View.renderTodoList(state.todos);
                });
            }
        })
    }

    const editDone = () => {
        View.todoListEl.addEventListener("click", (event) => {
            event.preventDefault();
            const content = event.target.value;
            if(content.trim() === "") return;
            const newTodo = { content }
            if (event.target.className ==="btn--done") {
                APIs.addTodo(newTodo).then(res => {
                    content.log("Res", res);
                    state.todos = [res, ...state.todos];
                    editable = 0;
                    console.log(editable);
                })
            }
        })
    }

    const todoStatus = () => {

    }

    //gets items from todo list
    const getTodos = ()=>{
        APIs.getTodos().then(res=>{
            state.todos = res;
        })
    }

    //updates render based on changed state
    const bootstrap = () => {
        addTodo();
        deleteTodo();
        editTodo();
        editDone();
        todoStatus();
        getTodos();


        state.subscirbe(() => {
            View.renderTodoList(state.todos)
        });
        
    }
    return {
        bootstrap
    }
})(Model, View);

//boots viewModel
ViewModel.bootstrap();