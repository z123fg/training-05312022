const APIs = (()=>{
    const URL = "http://localhost:3000/todos";
    const addTodo = (newTodos) => {
        return fetch(URL, {
            method:"POST",
            body:JSON.stringify(newTodos),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
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

    const updateTodo = (id, newTodos) => {
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            body:JSON.stringify(newTodos),
            headers:{
                'Content-Type': 'application/json'
            }

        }).then((res)=>{
            return res.json();
        });
    }

    const getTodos = () => {
        return fetch(`${URL}`).then((res) => {
            return res.json();
        })
    }

    return {//
        getTodos,
        deleteTodo,
        updateTodo,
        addTodo
    }

})()

const Model = (()=>{
    class State{
        #todos;
        #onChangeCb;
        constructor(){
            this.#todos = [];
            this.#onChangeCb = () => { };
        }

        get todos(){
            return this.#todos;
        }

        set todos(newTodos){
            this.#todos = newTodos;
            this.#onChangeCb();
        }

        subscribe = (cb) => {
            this.#onChangeCb = cb;
        }
    }


    return{
        State
    }

})();

/*  content: "work"
    id: 1
*/


const View = (()=>{ //display content
    const formElem = document.querySelector(".todo__form");
    const todoListElem = document.querySelector(".todo__list");
    const todoItemElem = document.querySelector(".todo__item");
    const renderTodoList = (todos) => {
        let template = "";
        todos.sort((a,b)=>b.id-a.id).forEach((todo)=>{
            template += `
                <li class="todo__item" id="item--${todo.id}">
                    <form class="todo__input" style="display:none">
                        <input type = "text"><button>Edit</button>
                    </form>
                    <span class="content">
                        <span id="content--${todo.id}">${todo.content}</span>

                        <button class="btn--update" id="${todo.id}">Edit</button>
                    </span>
                    <button class="btn--delete" id="${todo.id}">Delete</button>
                </li>
            `
        });
        todoListElem.innerHTML = template;
    };

    return {
        formElem,
        todoListElem,
        todoItemElem,
        renderTodoList
    }

})();


const ViewModel = ((Model, View)=>{ //logic | change the state
    const state = new Model.State();
    const addTodo = () => {
        View.formElem.addEventListener("submit", (event)=>{
            event.preventDefault();
            const content = event.target[0].value;
            if(content.trim() === "") return;
            //do api first
            const newTodo = { content };
            APIs.addTodo(newTodo).then(res => {
                console.log("Res", res);
                state.todos = [res, ...state.todos];
            });
            // if failed, not update page
            // state.todos = [{content:content},...state.todos]; //assign to 'todos'
        });
    }

    const deleteTodo = () => {
        View.todoListElem.addEventListener("click", (event)=>{
            const {id} = event.target;
            //console.log(event.target);
            if(event.target.className === "btn--delete"){ //target is button | event.currentTarget -> target that is binded to the event (todo list)
                //APIs.deleteTodo
                APIs.deleteTodo(id).then(res => {
                    console.log("Res", res);
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +id
                    });
                });
                
            }
        })
    }

    const updateDone = () => {
        View.todoListElem.addEventListener("click", (event)=>{
            //console.log(111);
            const {id} = event.target;
            console.log(event.target);
            if(isNaN(+id)){
                let cur_item = document.getElementById(id);
                cur_item.style.textDecoration = "line-through";
            }

        });

            
    }

    const updateTodo = () => {
        View.todoListElem.addEventListener("click", (event)=>{
            const {id} = event.target;
            let cur_item = document.getElementById(`item--${id}`);

            if(event.target.className === "btn--update"){
                let form = cur_item.getElementsByClassName("todo__input").item(0);
                let text = cur_item.getElementsByClassName("content").item(0);
                
                //hide
                text.style.display = "none";
                form.style.display = "inline";

                const todoInputElem = document.querySelector(".todo__input");
                todoInputElem.addEventListener("submit", (event)=>{
                    event.preventDefault();
                    text.style.display = "inline";
                    form.style.display = "none";
                    
                    const content = event.target[0].value;
                    if(content.trim() === "") return;
                    const newTodo = {content};   
                    APIs.updateTodo(id, newTodo).then((res)=>{
                        //console.log("Res", res);
                        const newTodos = [...state.todos];
                        for(let i = 0; i < state.todos.length; i++){
                            if(newTodos[i].id == id){
                                newTodos[i] = res;
                            }
                        }
                        state.todos = newTodos;
                    })
                });

            }

            
        });
    }

    const getTodos = ()=>{
        APIs.getTodos().then(res=>{
            state.todos = res;
        })
    }

    const bootstrap = () => {
        addTodo();
        deleteTodo();
        updateTodo();  
        updateDone();
        getTodos();
        state.subscribe(()=>{
            View.renderTodoList(state.todos);
        });
    }

    return {bootstrap}

})(Model, View);

ViewModel.bootstrap();
