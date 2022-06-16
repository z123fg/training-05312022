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

    const editTodo = (id, newData) => {
        return fetch(`${URL}/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        }).then((res) => res.json());
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
        editTodo,
        deleteTodo,
        addTodo
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
        #searchKeyword;
        #onChangeCb;
        constructor() {
            this.#todos = [];
            this.#searchKeyword = '';
            this.#onChangeCb = () => { }
        }
        get todos() {
            return this.#todos
        }
        set todos(newTodos) {
            this.#todos = newTodos
            this.#onChangeCb();
        }
        get searchKeyword() {
            return this.#searchKeyword
        }
        set searchKeyword(newKeyword) {
            this.#searchKeyword = newKeyword
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
    const renderTodolist = (state) => {
        let { todos, searchKeyword } = state;
        // console.log("current todos when in render", todos);
        todoListEl.replaceChildren();

        if (searchKeyword.length > 0) {
            todos = todos.filter((elem) => {
                return elem.content.toLowerCase().includes(searchKeyword.toLowerCase());
            });
        }

        todos.sort((a,b)=>{
            // "pending" > "completed" returns true
            if (a.status > b.status) {
                return -1;
            }
            if (b.status > a.status) {
                return 1;
            }
            return b.id-a.id
        });
        let firstCompletedIndex = 0;
        while (firstCompletedIndex < todos.length) {
            if (todos[firstCompletedIndex].status === "completed") {
                break;
            }
            firstCompletedIndex += 1;
        }
        if (todos.length === 0 || firstCompletedIndex === 0) {
            const noActiveTaskLi = document.createElement("li");
            noActiveTaskLi.classList.add("todo__list-item")
            noActiveTaskLi.classList.add("todo__list-item--no-active")
            noActiveTaskLi.textContent = "No active tasks";
            todoListEl.append(noActiveTaskLi);
        }
        todos.forEach((elem, index) => {
            if (index === firstCompletedIndex) {
                const dummyLi = document.createElement("li");
                const dummyBtn = document.createElement("button");
                const dummySpan = document.createElement("span");

                dummyLi.classList.add("todo__list-item", "todo__list-item--dummy");
                dummyBtn.textContent = "Edit";
                dummySpan.textContent = "asdfasdf";

                dummyLi.append(dummySpan);
                dummyLi.append(dummyBtn);
                todoListEl.append(dummyLi);
            }
            const li = document.createElement("li");
            const btnEdit = document.createElement("button");
            const btnDelete = document.createElement("button");

            li.classList.add("todo__list-item");

            if (elem.edit) {
                const input = document.createElement("input");
                input.classList.add("todo__list-input");
                input.id = `input-${elem.id}`;
                input.value = elem.content;
                li.append(input);
            } else {
                const span = document.createElement("span");
                span.classList.add("todo__list-text");
                if (elem.status === 'completed') {
                    span.classList.add("todo__list-text--completed");
                }
                span.id = `span-${elem.id}`;
                span.textContent = elem.content;
                li.append(span);
            }

            btnEdit.id = `edit-${elem.id}`;
            btnEdit.classList.add("btn", "btn--edit");
            // btnEdit.textContent = 'Edit';
            btnDelete.id = `del-${elem.id}`;
            btnDelete.classList.add("btn", "btn--delete");
            // btnDelete.textContent = "Delete";

            li.append(btnEdit);
            li.append(btnDelete);
            todoListEl.append(li);
        });
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
            const newTodo = {
                content,
                status: 'pending'
            }
            APIs.addTodo(newTodo).then(res => {
                console.log("Res", res);
                const todoWithEditState = {
                    ...res,
                    edit: false
                }
                state.todos = [todoWithEditState, ...state.todos];
                const formInput = document.getElementById("todo-form-input");
                formInput.value = '';
            })

        })
    }

    const editTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            // console.log(event.currentTarget, event.target);
            if (event.target.classList.contains("btn--edit")) {
                const { id } = event.target;
                const realId = id.slice("edit-".length);
                const newTodos = [...state.todos];
                let targetTodo = null;
                for (let i = 0; i < newTodos.length; i += 1) {
                    if (newTodos[i].id === +realId) {
                        targetTodo = newTodos[i];
                        break;
                    }
                }
                if (targetTodo.edit) {
                    const input = document.getElementById(`input-${realId}`);
                    const content = input.value;
                    if(content.trim() === "") return;
                    const newTodo = {
                        content
                    };
                    APIs.editTodo(realId, newTodo).then(res => {
                        console.log("Res", res);
                        getTodos();
                    });
                } else {
                    targetTodo.edit = true;
                    state.todos = newTodos;
                }
            }
        });
    }

    const toggleTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            // console.log(event.currentTarget, event.target);
            if (event.target.classList.contains("todo__list-text")) {
                const { id } = event.target
                const realId = id.slice("span-".length);
                const newTodos = [...state.todos];
                let targetTodo = null;
                for (let i = 0; i < newTodos.length; i += 1) {
                    if (newTodos[i].id === +realId) {
                        targetTodo = newTodos[i];
                        break;
                    }
                }
                const newTodo = {
                    status: targetTodo.status === 'pending' ? 'completed' : 'pending'
                };
                APIs.editTodo(realId, newTodo).then(res => {
                    console.log("Res", res);
                    getTodos();
                });
            }
        })
    }

    const deleteTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            // console.log(event.currentTarget, event.target)
            if (event.target.classList.contains("btn--delete")) {
                const { id } = event.target
                const realId = id.slice(4);
                APIs.deleteTodo(realId).then(res => {
                    console.log("Res", res);
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +realId
                    });
                });
            }
        })
    }

    const addFilterListener = () => {
        const filterEl = document.querySelector("#todo-form-filter");
        filterEl.addEventListener("input", (event) => {
            // console.log("filter event fired", event.target.value);
            state.searchKeyword = event.target.value
        })
    }

    const getTodos = () => {
        APIs.getTodos()
            .then((res) => {
                res = res.map((elem) => ({ ...elem, edit: false}));
                state.todos = res;
            });
    }

    const bootstrap = () => {
        addTodo();
        editTodo();
        toggleTodo();
        deleteTodo();
        addFilterListener();
        getTodos();
        state.subscirbe(() => {
            View.renderTodolist(state)
        });
    }
    return {
        bootstrap
    }
})(Model, View);

ViewModel.bootstrap();


