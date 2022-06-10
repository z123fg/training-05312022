const APIs = (() => {
    const URL = "http://localhost:3000/todos";

    const getTodos = () => {
        return fetch(`${URL}`)
               .then((res) => {return res.json();})
    }

    const addTodo = (newTodos) => {

        const configObject ={
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodos)
        }

        return fetch(URL, configObject).then((res) => {
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

    const updateTodo = (todo) =>{

        const {id, content} = todo
        // let newCont = {...todo, content:`${}`}
        const configObject ={
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCont)
        }

        return fetch(`${URL}/${id}`, configObject)
               .then((res) => {
            return res.json();
        })

    }

    return {
        getTodos,
        deleteTodo,
        addTodo,
        updateTodo
    }
})()




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

        subscirbe = (cb) => {
            this.#onChangeCb = cb;
        }
    }
    return {
        State
    }

})();



const View = (() => {
    const registerForm = document.querySelector(".event__form");
    const eventList = document.querySelector(".events__list");

    const renderTodolist = (todos) => {
        let tasks = "";
        todos.sort((a,b)=>b.id-a.id).forEach((todo) => {
            tasks += 
            `<li>
                <span>${todo.id}. ${todo.content}</span>
                <button class="btn--delete" id="${todo.id}">Delete</button>
                <button class="btn--edit" id="${todo.id}">Edit</button>
            </li>`
        })
        eventList.innerHTML = tasks;
    }
    return {
        registerForm,
        renderTodolist,
        eventList
    }
})();



const ViewModel = ((Model, View) => {
    const state = new Model.State();

    const addTodo = () => {
        View.registerForm.addEventListener("submit", (event) => {
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



    const alterTodo = () => {
        View.eventList.addEventListener("click", (event) => {debugger
            // console.log(event.currentTarget, event.target)
            // const { id } = event.target
            if (event.target.innerText === "Edit") {
                console.log(event.target.parentElement)
                const id = event.target.id;
                const listElement = event.target.parentElement
                const oldTaskObj =state.todos.find((todo) => {
                    return +todo.id === +id
                });

                const oldContent = oldTaskObj.content
                // oldTask.innerHTML = `<input type="text value="${oldContent} id="newCont"/> <button class="btn--save" id="${todo.id}">save</button><button class="btn--delete" id="${todo.id}">Delete</button> `
                // console.log(oldTaskCont.content)
                // updatedCont(){
                //     this.cont = document.getElementById("newCont").value
                // }

            }

            else if (event.target.className === "btn--delete") {
                APIs.deleteTodo(id).then(res => {
                    console.log("Res", res);
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +id
                    });
                });
            }

            else if (event.target.innerText ==="Save"){
                console.log("save")

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
        alterTodo();
        getTodos();
        state.subscirbe(() => {
            View.renderTodolist(state.todos)
        });
    }
    return {
        bootstrap
    }
})(Model, View);

ViewModel.bootstrap();


