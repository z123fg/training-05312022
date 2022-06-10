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

    const getTodos = () => {
        return fetch(`${URL}`).then((res) => {
            return res.json();
        })
    }

    return {
        getTodos,
        deleteTodo,
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
    const renderTodoList = (todos) => {
        let template = "";
        todos.sort((a,b)=>b.id-a.id).forEach((todo, index)=>{
            template += `
                <li><span>${todo.content}</span><button class="btn--delete" id="${index}">Delete</button></li>
            `
        });
        todoListElem.innerHTML = template;
    };

    return {
        formElem,
        todoListElem,
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
                // console.log("Res", res);
                state.todos = [res, ...state.todos];
            });
            // //if failed, not update page
            // state.todos = [{content:content},...state.todos]; //assign to 'todos'
        });
    }

    const deleteTodo = () => {
        View.todoListElem.addEventListener("click", (event)=>{
            const {id} = event.target;
            if(event.target.className === "btn-delete"){ //target is button | event.currentTarget -> target that is binded to the event (todo list)
                //APIs.deleteTodo
                APIs.deleteTodo(id).then(res => {
                    console.log("Res", res);
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +id
                    });
                });
                // state.todos = state.todos.filter((todo, index)=>{
                //     return +index !== +id
                // });
            }
        })

    }

    const bootstrap = () => {
        addTodo();
        //deleteTodo();
        state.subscribe(()=>{
            View.renderTodoList(state.todos);
        });
    }

    return {bootstrap}

})(Model, View);

ViewModel.bootstrap();
