const APIs = (() => {
    const URL = "http://localhost:3000/todos";

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


    const deleteTodo = (id) => {
        return fetch(`${URL}/${id}`, {
            method: "DELETE"
        }).then((res) => {
            return res.json();
        })
    };
    const editTodo=(id,content)=>{
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(content)
         }).then((res) => {
            return res.json();
        })

    }
    const completeTodo=(id)=>{
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(id)
        }).then((res) => {
            return res.json();
        })
    }
    const getTodos = () => {
        return fetch(`${URL}`).then((res) => {
            return res.json();
        })
    }

    return {
        getTodos,
        editTodo,
        deleteTodo,
        addTodo,
        completeTodo
    }
})()




/* 
    closure, IIFE
    event bubbling, event capturing
    json server
*/
const Model = (() => {
    class State {
        #todos;
        #onChangeCb;
        constructor() {
            this.#todos = [];
            this.#onChangeCb = () => { }
        }
        get todos() {
            return this.#todos
        }
        set todos(newTodos) {
            this.#todos = newTodos
            this.#onChangeCb();
        }

        subscribe = (cb) => {
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

const View = (() => {
    const formEl = document.querySelector(".todo__form");
    const todoListEl = document.querySelector(".todo__list");
    const renderTodolist = (todos) => {
        
        let template = "";
        // console.log(todos);
        if(todos.length===0){
            console.log("no todos");
            template+="<span>No active task</span>"
        }
        // sorting the id since it displays in descending order by default
        todos.sort((a,b)=>b.id-a.id).forEach((todo) => {
            template += `
                <li><span>${todo.content}</span><button class="btn--edit" id="${todo.id}">Edit</button><button class="btn--delete" id="${todo.id}">Delete</button></li>
            `
        })
        todoListEl.innerHTML = template;
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
            if(content.trim() === "") {
                alert("write your todo's before submmitting!!");
                return;}
            const newTodo = { content }
            APIs.addTodo(newTodo).then(res => {
                state.todos = [res, ...state.todos];//anti-pattern
            })

        })
    }

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
    const editTodo=()=>{
        View.todoListEl.addEventListener("click", (event) => {
            console.log(event.currentTarget, event.target)
            console.log(event.currentTarget);
            const { id } = event.target;
            console.log(id);
            const parentList=event.currentTarget.children.firstChild;
            console.log(parentList);
            const contents={"content": "call mom"};//adding default value since I am struggling to get the content editable;
            // const contents={"content":content };
            if (event.target.className === "btn--edit") {
                APIs.editTodo(id,contents).then(res => {
                    //console.log("Res", res);
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

    const bootstrap = () => {
        addTodo();
        deleteTodo();
        getTodos();
        editTodo();
        state.subscribe(() => {
            View.renderTodolist(state.todos)
        });
    }
    return {
        bootstrap
    }
})(Model, View);

ViewModel.bootstrap();