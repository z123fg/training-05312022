const APIs = (() => {
    const URL = "http://localhost:3000/todos";

    const addTodo = (newTodos) => {
        newTodos.complete = false
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

    const editTodo = (id, content) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content, complete: false })
        };

        return fetch(`${URL}/${id}`, requestOptions).then((res) => {
            return res.json();
        }).catch(e => {
            console.log(e)
        })

    };

    const completeTodo = (todo) => {
        var item = fetch(`${URL}/${todo.id}`).then((res) => {
            return res.json();
        })
        todo.complete = !item.complete
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo)
        };

        return fetch(`${URL}/${todo.id}`, requestOptions).then((res) => {
            return res.json();
        }).catch(e => {
            console.log("Error from CompleteTodo(): ", e)
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
        addTodo,
        editTodo,
        completeTodo,
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
    const editIcon = `<svg focusable="false" width=20px aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>`
    const deleteIcon = `<svg focusable="false" width=20px aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>`
    const renderTodolist = (todos) => {
        let completedTemplate = "";
        let template = "";
        todos.sort((a, b) => b.id - a.id).forEach((todo) => {
            if (todo.complete === true) {
                completedTemplate += `
                <li class="completed-todo"><span> ${todo.content} </span>   <button class="btn--delete" id="${todo.id}">Delete</button></li>
        `
            } else {
                template += `
            <li><span>${todo.content}</span><button class="btn--edit" >Edit</button> <button class="btn--delete" id="${todo.id}">Delete</button></li>
        `
            }
        })

        todoListEl.innerHTML = template + "<br>" + completedTemplate
    }
    return {
        formEl,
        renderTodolist,
        todoListEl,
    }
})();



const ViewModel = ((Model, View) => {
    const state = new Model.State();

    const editTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {
            const { id } = event.target.parentNode.lastChild
            if (event.target.className === "btn--edit") {
                var listItem = event.target.parentNode;
                var shouldUpdate = listItem.firstElementChild.tagName === "INPUT"
                if (shouldUpdate) {
                    var spanTag = document.createElement('span');
                    var inputTag = listItem.firstElementChild;
                    var updatedTodoContent = inputTag.value;
                    spanTag.innerHTML = updatedTodoContent;
                    listItem.replaceChild(spanTag, inputTag);
                    console.log(inputTag.value, 'before...',)

                    // put request
                    APIs.editTodo(id, updatedTodoContent).then(res => {
                        console.log("Res", res);
                    });

                }
                else {
                    var spanTag = listItem.firstElementChild;
                    var inputTag = document.createElement('input');
                    inputTag.innerHTML = spanTag.innerHTML;
                    inputTag.setAttribute("value", `${spanTag.innerHTML}`)
                    listItem.replaceChild(inputTag, spanTag);
                }
            }
        })
    }


    const comopleteTodo = () => {
        View.todoListEl.addEventListener("click", (event) => {

            console.log(event.target.textDecoration)
            const { id } = event.target.parentNode.lastChild
            var shouldComplete = event.target.tagName === "SPAN";
            if (shouldComplete) {
                APIs.completeTodo({ id, content: event.target.innerHTML, complete: true }).then(res => {
                    console.log(res)
                })
            }

        })
    }

    const addTodo = () => {
        View.formEl.addEventListener("submit", (event) => {
            event.preventDefault();
            const content = event.target[0].value;
            if (content.trim() === "") return;
            const newTodo = { content }
            APIs.addTodo(newTodo).then(res => {
                // console.log("Res", res);
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

    const getTodos = () => {
        APIs.getTodos().then(res => {
            state.todos = res;
        })
    }

    const bootstrap = () => {
        comopleteTodo();
        addTodo();
        editTodo();
        deleteTodo();
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

