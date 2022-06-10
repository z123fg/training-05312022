//sets up web apis
const APIs = (() =>{
    //local host url
    const URL = "http://localhost:5500/todos/send";

    //web api for addTodo
    const addTodo = (newTodos)=>{
        return fetch(URL,{
            method: "POST",
            body: JSON.stringify(newTodos),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res)=>{
            return res.json();
        })
    }

    //web api for deleteTodo
    const deleteTodo = (id) => {
        return fetch(`${URL}/${id}`,{
            method: "DELETE"
        }).then((res)=>{
            return res.json();
        })
    };

    //web api for get todos
    const getTodos = () => {
        return fetch(`${URL}`).then((res) => {
            return res.json();
        })
    }

    //returns various web apis
    return {
        getTodos,
        deleteTodo,
        addTodo
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
    //render's webpage view every tmie state is changed
    const renderTodoList = (todos=>{
        let template = "";
        todos.sort((a,b)=>b.id-a.id).forEach((todo) =>{
            template += `
            <li><span>${todo.content}</span><button class="btn--delete" id=${todo}>Delete</button></li>
            `
        })
        
        todoListEl.innerHTML = template;
    })

    //returns view variables
    return{
        formEl, 
        renderTodoList,
        todoListEl
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
                // console.log("Res", res);
                state.todos = [res, ...state.todos];//anti-pattern
            })

        })
    }

    //deletes items from todo list
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
        getTodos();
        state.subscirbe(() => {
            View.renderTodolist(state.todos)
        });
    }
    return {
        bootstrap
    }
})(Model, View);


//boots viewModel
ViewModel.bootstrap();