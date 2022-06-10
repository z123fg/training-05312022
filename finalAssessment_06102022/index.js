const APIs = (() => {
    const URL = "http://localhost:3000/todos"

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
    }

    const editTodo = (newTodo, id) => {
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(newTodo),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json();
        })
    }

    const changeTodoStatus = (status, id) => {

    }

    const getTodos = () => {
        return fetch(`${URL}`).then((res) => {
            return res.json();
        })
    }

    return {
        getTodos,
        addTodo,
        deleteTodo,
        editTodo,
        changeTodoStatus
    }
    
})();



const Model = (() => {
    class State {
        #todos;
        #onChangeCb;
        constructor() {
            this.#todos = [];
            this.#onChangeCb = () => { }
        }

        get todos() {
            return this.#todos;
        }

        set todos(newTodos) {
            this.#todos = newTodos;
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



const View = (() => {
    const formEl = document.querySelector(".todo__form");
    const todoListEl = document.querySelector(".todo__list");
    const renderTodolist = (todos) => {
        let template = "";
        todos.sort((a,b) => b.id - a.id).forEach((todo) => {
            template += `
                <li><span class="span-${todo.id}" id="${todo.id}">${todo.content}</span><button class="btn--edit" id="${todo.id}">Edit</button><button class="btn--delete" id="${todo.id}">Delete</button></li>
            `
        })
        todoListEl.innerHTML = template;
    }

    return {
        formEl,
        todoListEl,
        renderTodolist
    }

})();



const ViewModel = ((Model, View) => {
    const state = new Model.State();

    const addTodo = () => {
        View.formEl.addEventListener("submit", (event) => {
            event.preventDefault();
            const content = event.target[0].value;
            if(content.trim() === "")return;
            const newTodos = { content , status: false };
            APIs.addTodo(newTodos).then(res => {
                console.log("Result: ", res);
                state.todos = [res, ...state.todos];
            })

        })
    }

    const deleteTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            const { id } = event.target;
            if (event.target.className === "btn--delete") {
                APIs.deleteTodo(id).then(res => {
                    console.log("Result: ", res);
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +id;
                    });
                })
            }
        })
    }

    const changeToEdit = () => {
        View.todoListEl.addEventListener("click", (event) => {
            // console.log(event.currentTarget, event.target);
            
            const { id } = event.target;
            let spanEl = document.querySelector(`.span-${id}`);
            let spanContent = spanEl.innerHTML;
            console.log(spanEl);

            if (event.target.className === "btn--edit" && spanEl.id === id) {
                if (spanEl.classList.contains("text--editable")){
                    console.log("edit");
                    spanEl.innerHTML = spanEl.firstChild.value;
                    spanEl.classList.toggle("text--editable");
                }else{
                    spanEl.innerHTML = `<input value=${spanContent}>`;
                    spanEl.classList.toggle("text--editable");
                }
            }
        })
    }

    const editTodo = () => {
        View.todoListEl.addEventListener("submit", (event) => {})
    }

    const changeTodoStatus = () => {

    }

    const getTodos = () => {
        APIs.getTodos().then(res => {
            state.todos = res;
        })
    }

    const bootstrap = () => {
        addTodo();
        deleteTodo();
        changeToEdit();
        editTodo();
        changeTodoStatus();
        getTodos();
        state.subscribe(() => {
            View.renderTodolist(state.todos)
        });
    }

    return {
        bootstrap
    }

})(Model, View);

ViewModel.bootstrap();