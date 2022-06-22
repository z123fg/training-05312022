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

    const updateTodo = (newTaskObj) =>{
        // debugger
        // const {id, content} = todo
        // let newCont = {...todo, content:`${}`}
        const configObject ={
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTaskObj)
        }

        return fetch(`${URL}/${newTaskObj.id}`, configObject)
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
                <span> ${todo.content}</span>
               
                
                <!--<button class="btn--edit" id="${todo.id}">Edit</button> 
                <button class="btn--delete" id="${todo.id}">Delete</button>-->

                <button class="btn--edit" id="${todo.id}">
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                    </svg>
                </button>

                <button class="btn--delete" id="${todo.id}">
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                    </svg>
                </button>
                


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
        View.eventList.addEventListener("click", (event) => {
            
            displayEditField=()=>{
                const id = event.target.id;
                const oldTaskObj =state.todos.find((todo) => {
                    // debugger
                    return todo.id == id
                }); 
                const  task= event.target.parentElement.children[0]
                const value = oldTaskObj.content
                task.innerHTML = `<input type="text" value="${value}" id="edited"/>`
            }

            updateTask=()=>{
                const id = event.target.id;
                const oldTaskObj = state.todos.find((todo) => {
                    return todo.id == id
                }); 
                const editedTask = document.getElementById("edited").value
                 let newTaskObj = {...oldTaskObj,content:`${editedTask}`}

                // debugger
                // const newTaskObj = 
                // console.log(editedTask)
                // 
                APIs.updateTodo(newTaskObj)
            }


            // if (event.target.innerText === "Edit") {
            //     // console.log(event.target.parentElement)
            //     event.target.innerText = "Save";
            //     displayEditField();
            // }

            // else if (event.target.className === "btn--delete") {
            //     const id = event.target.id
            //     APIs.deleteTodo(id).then(res => {
            //         console.log("Res", res);
            //         state.todos = state.todos.filter((todo) => {
            //             return +todo.id !== +id
            //         });
            //     });
            // }

            // else if (event.target.innerText ==="Save"){
            //     console.log("save")
            //     event.target.innerText="Edit";
            //     updateTask();
            // }

            if (event.target.className === "btn--edit") {
                // console.log(event)
                // debugger
                // console.log(event.target.parentElement)
                // event.target.innerText = "Save";

                displayEditField();
            }

            else if (event.target.className === "btn--delete") {
                const id = event.target.id
                APIs.deleteTodo(id).then(res => {
                    console.log("Res", res);
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +id
                    });
                });
            }

            // else if (event.target.className ==="btn--edit"){
            //     console.log("save")
            //     event.target.innerText="Edit";
            //     updateTask();
            // }

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


