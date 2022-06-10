const APIs = (() => {
    const URL = "http://localhost:3000/todos"
    //POST
    const addTodo = (newTodos) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodos)
           
        })
        .then((res)=> {return res.json()})
        .catch(err => {console.log(err)})
    }
    // GET
    const getTodos = () => {
        return fetch(URL).then(res => {return res.json()}).catch(err => {console.log(err)})
    }

    // DELETE
    const deleteTodo = (id) => {
        return fetch(`${URL}/${id}`,{
            method: "DELETE"
        })
        .then((res)=>{return res.json()})
        .catch(err=> {console.log(err)})
    }
    return {getTodos, addTodo, deleteTodo}
})()   


// closeure, IIFE

const Model = (() => {
    class State{
        #todos;
        #onChangeCb;
        constructor(){
            this.#todos = [];
            this.#onChangeCb = () => {};
        }
        // getter
        get todos(){
            return this.#todos;
        }
        // setter
        set todos(items){
            this.#todos = items;
            this.#onChangeCb();
        }
        subscribe = (cb) => {
            this.#onChangeCb = cb;
        }
    }       
    return { 
        State
    }
})()

const View = (()=>{
    const formElement = document.querySelector(".todo__form"); // .querySelector(".todo__form") <- "." represents the class name
    const todoListElement = document.querySelector(".todo-list__item");
    const renderTodoList = (todos) => {
        let template = ""; 
        console.log("todos: ", todos);
        todos.forEach( (todo,index) => {
            template += 
            `
            <li>
                <span>${todo.userInput}</span>
                <button class="btn--delete" type="button" id="${todo.id}">Delete</button>
            </li>
            `
            todoListElement.innerHTML = template;
        })
    }
    return{
        formElement,
        todoListElement,
        renderTodoList,
    }
})()

// ViewModel interact with both View and Model
const ViewModel = ((View, todoModel)=>{
    const state = new todoModel.State();

    const addTodo = () => {
        View.formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            const userInput = event.target[0].value;
            const newTodo = {userInput};
            APIs.addTodo(newTodo).then(res=> {
                state.todos = [{content: userInput}, ...state.todos];
            });
        })
    }

    const getTodos = () => {
        APIs.getTodos().then(res => {
            state.todos = res;
        })
    }

    const deleteTodo = () => {
        View.todoListElement.addEventListener('click', (event) => {
            event.preventDefault();
            if (event.target.className === "btn--delete" ){
                APIs.deleteTodo(event.target.id).then(res =>{
                    state.todos = state.todos.filter((todos,index) =>{
                        return (+index !== +event.target.id)
                    })
                })
            }
        })
    }

    const bootstrap = () => {
        addTodo();
        deleteTodo();
        getTodos();
        state.subscribe(()=>{
            View.renderTodoList(state.todos)
        });
    }

    return{
        bootstrap
    }
})(View, Model)

ViewModel.bootstrap();