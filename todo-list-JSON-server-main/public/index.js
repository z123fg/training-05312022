const APIs = (() => {
    const URL = "http://localhost:3000/todos";

    const addTodo = (newTodos) => {
        return fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                content:newTodos,
                completed :false
        }),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then((res) => {
            return res.json();
        })
    }


    const deleteTodo = (id) => {
        return fetch(`${URL}/${id}`, {
            method: "DELETE"
        }).then((res) => {
            return res.json();
        })
    };

    const getTodos = () => {
        return fetch(`${URL}`).then((res) => {
            return res.json();
        })
    }

    const editTodo = (id, updated)=>{
        return fetch(`${URL}/${id}`, {
            method: "PATCH",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                content: updated
            })
        }
        )
        .then((res) => {
            return res.json();
        })
    }

    const toggleComplete = (id , complete) =>{
        return fetch(`${URL}/${id}`, {
            method: "PATCH",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                completed: !complete
        })
        }
        )
        .then((res) =>{
            return res.json()
        })
    }
    return {
        getTodos,
        deleteTodo,
        addTodo,
        editTodo,
        toggleComplete
    }
})()


const Model = (() => {
    class State {
        //variables for state
        //todos array
        #todos;
        //equals a function
        #onChangeCb;
        constructor() {
            //empty array
            this.#todos = [];
            //equal to a function
            this.#onChangeCb = () => { }
        }

        //sets the todo property
        get todos() {
            return this.#todos
        }
        //sets todo array when new todo is added
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
        if(todos.length > 0){
        todos.sort((a,b)=>b.id-a.id).forEach((todo) => {
            template += `
                <li>
                <span id="${`span-${todo.id}`}" class = ${todo.completed ? "strikeout": ""} >${todo.content}</span>
                <div class="li__button__container">
                <button class="btn--edit" id="${todo.id}">Edit</button>
                <button class="btn--delete" id="${todo.id}">Delete</button>
                </div>
                </li>
            `
        })
        todoListEl.innerHTML = template;
    } else if(todos.length === 0){
        template += `<p>There are no task to be completed</p>`
        todoListEl.innerHTML = template
    }
    }
    return {
        formEl,
        renderTodolist,
        todoListEl
    }
})();



const ViewModel = ((Model, View) => {
    const state = new Model.State();

    const addTodo = () => {
        View.formEl.addEventListener("submit", (event) => {
            event.preventDefault();
            const content = event.target[0].value;
            if(content.trim() === "") return;
            const newTodo =  content  
            

            APIs.addTodo(newTodo).then(res => {
                state.todos = [res, ...state.todos];//anti-pattern
            })

        })
    }

    const deleteTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            
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

    const getTodos = ()=>{
        APIs.getTodos().then(res=>{
            state.todos = res;
        })
    }

    const editTodo = () =>{
        View.todoListEl.addEventListener("click" , (event) =>{
            event.preventDefault()
            const {id} = event.target
            if (event.target.className === "btn--edit"){
                // console.log(event.target)
                event.target.className = "btn--edit--editing"
                const span = document.getElementById(`span-${id}`)
                console.log(span.contentEditable)
                span.contentEditable = true
                span.classList.add('editing')
                console.log(span.value)                
            } else if(event.target.className === "btn--edit--editing"){
                event.target.className = "btn--edit"
                const span = document.getElementById(`span-${id}`)
                console.log(span.contentEditable)
                span.contentEditable = false
                var updated = span.innerHTML
                APIs.editTodo(id , updated).then(res =>{
                    state.todos = res
                })
            }
        })
    }

    const toggleComplete = () =>{
        View.todoListEl.addEventListener("click" , (event)=>{
            console.log(event.target)
            event.preventDefault()
            console.log(event.target.contentEditable)
            if(event.target.contentEditable === 'inherit'){
            let id = parseInt(event.target.id.split('').splice(5))
            console.log(state.todos[state.todos.length - id].completed)
            let complete = state.todos[state.todos.length - id].completed
            APIs.toggleComplete(id , complete).then(res =>{
                state.todos = res
            })
        }
        


        })
    }

    const bootstrap = () => {
        addTodo();
        deleteTodo();
        getTodos();
        editTodo()
        toggleComplete()
        state.subscirbe(() => {
            View.renderTodolist(state.todos)
        });
    }
    return {
        bootstrap
    }
})(Model, View);

ViewModel.bootstrap();