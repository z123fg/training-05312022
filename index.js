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

    const editTodo = (id, newContent) => {
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(newContent),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json();
        })
    };


    const deleteTodo = (id) => {
        return fetch(`${URL}/${id}`, {
            method: "DELETE"
        }).then((res) => {
            return res.json();
        })
    };

    const completeTodo = (id) => {
        return fetch(`${URL}/${id}`, {
            method: "PATCH"
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
        completeTodo,
        addTodo
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
    const formEl = document.querySelector(".todo__form");
    const todoListEl = document.querySelector(".todo__list");
    const renderTodolist = (todos) => {
        let template = "";
        todos.sort((a, b) => b.id - a.id).forEach((todo) => {
            template += `
                <li id="${todo.id}">
                    <input type=text class="todo-input" value=${todo.content} readonly>
                    <button class="btn--edit">Edit</button>
                    <button class="btn--delete" id="${todo.id}">Delete</button>
                </li>
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
        const todoInput = document.getElementById('enter-todo')
        View.formEl.addEventListener("submit", (event) => {
            setTimeout(() => {
                todoInput.value = "";
            }, 100)
            event.preventDefault();
            const content = event.target[0].value;
            if (content.trim() === "") return;
            const newTodo = { content }
            APIs.addTodo(newTodo).then(res => {

                state.todos = [res, ...state.todos];
            })

        })
    }

    const editTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {

            if (event.target.className === "btn--edit") {
                let li = event.target.parentElement;
                let input = li.querySelector('.todo-input');

                if (event.target.innerHTML === 'Edit') {
                    event.target.innerHTML = 'Save'
                    input.removeAttribute("readonly");
                } else if (event.target.innerHTML === 'Save') {

                    let content = input.value;
                    let newContent = { content }

                    APIs.editTodo(li.id, newContent).then(res => {
                        console.log(res);
                    })

                    event.target.innerHTML = 'Edit'
                    input.setAttribute("readonly", true);
                }
            }
        })
    }

    const deleteTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            const { id } = event.target
            if (event.target.className === "btn--delete") {
                APIs.deleteTodo(id).then(res => {
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +id
                    });
                });
            }
        })
    }

    const completeTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            let li = event.target.parentElement;
            let editButton = li.querySelector('.btn--edit');
            if (event.target.className.includes("todo-input") && editButton.innerHTML !== 'Save') {
                event.target.classList.toggle("strike");
            }
        })
    }

    const getTodos = () => {
        APIs.getTodos().then(res => {
            state.todos = res;
        })
    }

    const bootstrap = () => {
        addTodo();
        deleteTodo();
        completeTodo();
        editTodo();
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