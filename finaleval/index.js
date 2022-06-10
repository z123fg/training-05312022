const APIs = (() => {
    const URL = "http://localhost:3000/todos";

    const addTodo = (newTodos) => {
        return fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                content: newTodos,
                isCompleted: false
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

    const updateTodo = (id, newTodo) => {
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                content: newTodo
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log("update: ", res);
            return res.json();
        })
    };

    const updateTodoStatus = (id, flag) => {
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                isCompleted: flag
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log("update Status: ", res);
            return res.json();
        })
    };

    return {
        getTodos,
        deleteTodo,
        addTodo,
        updateTodo,
        updateTodoStatus,
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
        #todos2;
        #onChangeCb;
        constructor() {
            this.#todos = [];
            this.#todos2 = [];
            this.#onChangeCb = () => { }
        }
        get todos() {
            return this.#todos;
        }
        set todos(newTodos) {
            this.#todos = newTodos;
            this.#onChangeCb();
        }

        get todos2() {
            return this.#todos2;
        }
        set todos2(newTodos) {
            this.#todos = newTodos;
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

/* 
    [
        {content:"work",id:1},
        {content:"eat",id:2}
    ]
*/

const View = (() => {
    const formEl = document.querySelector(".todo__form");
    const todoListEl = document.querySelector(".todo__list");
    const totoListEl2 = document.querySelector(".toto__list--done");
    const renderTodolist = (todos) => {
        let template = "";
        todos.sort((a,b)=>b.id-a.id).forEach((todo) => {
            template += `
                <li><span id="cont_${todo.id}">${todo.content}</span>
                    <input class="todo--edit" id="edit_${todo.id}" style="display: none"/>
                    <button class="btn--edit" id="b_${todo.id}">Edit</button>
                    <button class="btn--delete" id="${todo.id}">Delete</button>
                </li>
            `
        })
        todoListEl.innerHTML = template;
    }
    const renderTodolist2 = (todos) => {
        let template = "";
        todos.sort((a,b)=>b.id-a.id).forEach((todo) => {
            template += `
                <li><span id="cont_${todo.id}">${todo.content}</span>
                    <input class="todo--edit" id="edit_${todo.id}" style="display: none"/>
                    <button class="btn--edit" id="b_${todo.id}">Edit</button>
                    <button class="btn--delete" id="${todo.id}">Delete</button>
                </li>
            `
        })
        todoListEl2.innerHTML = template;
    }
    return {
        formEl,
        renderTodolist,
        renderTodolist2,
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
            // const newTodo = { content };
            APIs.addTodo(content).then(res => {
                // console.log("Res", res);
                state.todos = [res, ...state.todos];//anti-pattern
            })
            document.querySelector(".todo__form input").value = "";
        })
    }

    const modifyTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            const { id } = event.target
            console.log("event,", event);
            if (event.target.className === "btn--delete") {
                console.log("delete");
                APIs.deleteTodo(id).then(res => {
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +id
                    });
                });
            }
            else if (event.target.className === "btn--edit") {
                console.log("edit");
                const n_id = id.slice(id.indexOf('b_') + 2);
                const newContent = document.querySelector(`#edit_${n_id}`);
                const cont_span = document.querySelector(`#cont_${n_id}`);

                if(newContent.style.display == 'none') {
                    newContent.style.display = '';
                    cont_span.style.display = 'none';
                } 
                else {
                    const newTodo = newContent.value;
                    if(newTodo.trim() === "") {}
                    else {
                        APIs.updateTodo(n_id, newTodo).then(res => {
                            state.todos = state.todos.filter((todo) => {
                                if(todo.id == n_id) {
                                    todo.content = newTodo;
                                }
                                return true;
                            });
                        });
                    }
                    newContent.style.display = "none";
                    cont_span.style.display = "";
                }
            }
            else if (event.target.id === `${id}`) {
                console.log("status");
                // const n_id = id.slice(id.indexOf('cont_') + 5);
                // const cont_span = document.querySelector(`#cont_${n_id}`);

                // APIs.updateTodoStatus(n_id, true).then(res => {
                //     state.todos = state.todos.filter((todo) => {
                //         if(todo.id == n_id) {
                //             todo.isCompleted = true;
                //             state.todos2 = [todo, ...state.todos2];
                //         }
                //         return +todo.id !== +id;
                //     });

                // });
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
        modifyTodo();
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


