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
    // PUT
    const updateTodo = (id, updatedTodo) => {
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTodo)
           
        })
    }
    return {getTodos, addTodo, deleteTodo, updateTodo}
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
        let activeTasks = todos.filter(todo => todo.completed === false); // list of task not completed = 0
        console.log("todo list updated: ", todos);
        // Condition to render "No Active Task" text
        console.log('lengh of list: ', todos.length);
        console.log('length of active task: ', activeTasks.length);
        (todos.length == 0 || activeTasks.length === 0)  
        ? template = `<li class="li--item"><span class="strike-through">No Active Task</span></li>`
        : template = ``
        // Rendering Tasks base on completed attribute
        todos.forEach( (todo,index) => {
            // new task <span></span> is assigned with task id so when edited button clicked, only have to restyle span instead of the <li></li>
            todo.completed
            ? template += 
            `
            <li class="li--item">
                <span class="completed id="task-${todo.id}">${todo.content}</span>
                <button class="btn--delete" type="button" id="${todo.id}">Delete</button>
            </li>
            `

            : template += 
            `
            <li class="li--item">
                <span class="incomplete" id="task-${todo.id}">${todo.content}</span>
                <button class="btn--edit" type="button" id="${todo.id}">Edit</button>
                <button class="btn--delete" type="button" id="${todo.id}">Delete</button>
            </li>
            `
        })
        todoListElement.innerHTML = template;
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
            const content = event.target[0].value;
            const newTodo = {content, completed: false};
            APIs.addTodo(newTodo).then(res=> {
                return state.todos = [{content: res.content, id: res.id, completed: false}, ...state.todos];
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
                    state.todos = state.todos.filter((todo) =>{
                        return (+todo.id !== +event.target.id)
                    })
                    // console.log("after delete: ", state.todos);
                })
            }
        })
    }
    // convert <span></span> into input field
    const editTodo = () => {
        View.todoListElement.addEventListener('click', (event) => {
            if (event.target.className === "btn--edit" ){
                event.preventDefault();
                // check if the user EDITTING or Want to EDIT
                let element= document.getElementById(`task-${event.target.id}`);
                let text = element.innerText;
                if (text.length > 0){
                    // Span exists -> Convert Span into input field with innerText as value
                    element.innerHTML = 
                    `<input class="editting-task" id="edit-${event.target.id}" value="${text}" type="text">`
                } else {
                    // Input exists -> Convert Input Field into span with Value of input as innerText
                    let inputValue = document.getElementById(`edit-${event.target.id}`).value
                    let selectedTodo = state.todos.find(todo => +todo.id === +event.target.id);
                    let sTodoIndex = state.todos.findIndex(todo => +todo.id === +event.target.id);
                    selectedTodo.content = inputValue;
                    // send request before updating
                    APIs.updateTodo(event.target.id, selectedTodo).then(res =>{
                        return state.todos = [...state.todos];
                        element.innerHTML = `
                        <span class="incomplete" id="task-${selectedTodo.id}">
                        ${inputValue}
                        </span>`
                    }).catch(err => {console.log("Error updating task: ", err)})
                };
            } else if (event.target.className === "incomplete"){
                // change .completed from false to true
                let todoId = event.target.id.replace('task-', '');
                let selectedTodo = state.todos.find(todo => +todo.id === +todoId);
                let sTodoIndex = state.todos.findIndex(todo => +todo.id === +todoId);
                selectedTodo.completed = true;
                state.todos[sTodoIndex] = selectedTodo;
                APIs.updateTodo(todoId, selectedTodo).then(res =>{
                    return state.todos = [...state.todos];
                }).catch(err => {console.log("Error updating task: ", err)})
            }
        })
    }
    
    const bootstrap = () => {
        addTodo();
        deleteTodo();
        getTodos();
        editTodo();
        state.subscribe(()=>{
            View.renderTodoList(state.todos)
        });
    }

    return{
        bootstrap
    }
})(View, Model)

ViewModel.bootstrap();