const APIs = (() => {
	const URL = 'http://localhost:3000/todos';

	const getTodos = () => {
		return fetch(URL).then((res) => {
			return res.json();
		});
	};

	const addTodo = (newTodos) => {
		return fetch(URL, {
			method: 'POST',
			body: JSON.stringify(newTodos),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => {
			return res.json();
		});
	};

	const deleteTodo = (id) => {
		return fetch(`${URL}/${id}`, {
			method: 'DELETE',
		}).then((res) => {
			return res.json();
		});
	};

	const editTodo = (newTodos, id) => {
		console.log(newTodos, id);
		return fetch(`${URL}/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify({
				content: newTodos,
				id: id,
			}),
		}).then((res) => {
			return res.json();
		});
	};

	const updateTodo = (newTodos, id, check) => {
		return fetch(`${URL}/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(newTodos),
		}).then((res) => {
			return res.json();
		});
	};

	return {
		getTodos,
		addTodo,
		deleteTodo,
		editTodo,
		updateTodo,
	};
})();

const Model = (() => {
	class State {
		#todos;
		#onChangeCb;
		constructor() {
			this.#todos = [];
			this.#onChangeCb = () => {};
		}
		get todos() {
			return this.#todos;
		}
		set todos(newTodos) {
			this.#todos = newTodos;
			this.#onChangeCb();
		}

		subcribe = (cb) => {
			this.#onChangeCb = cb;
		};
	}
	return {
		State,
	};
})();

const View = (() => {
	const formEl = document.querySelector('.todo__form');
	const todoListEl = document.querySelector('.todo__list');
	const input = document.querySelector('.todo__form-input');

	const renderTodoList = (todos) => {
		let template = '';
		todos
			// .sort((a, b) => b.id - a.id)
			.forEach((todo) => {
				const check = todo.check ? '.' : '';
				template += `<li id='${todo.id}'>
				<span class='editable' id='active' contenteditable='false'>${todo.content}</span>
				<button class='btn--edit' id='${todo.id}'>Edit</button>
				<button class='btn--delete' id='${todo.id}'>Delete</button>
				</li>`;
			});
		todoListEl.innerHTML = template;
		input.value = '';
	};
	return {
		formEl,
		renderTodoList,
		todoListEl,
	};
})();

const ViewModel = ((Model, View) => {
	const state = new Model.State();

	const getTodos = () => {
		APIs.getTodos().then((res) => {
			state.todos = res;
		});
	};

	const addTodo = () => {
		View.formEl.addEventListener('submit', (event) => {
			event.preventDefault();
			const content = event.target[0].value;
			if (content.trim() === '') return;
			const newTodo = { content };
			APIs.addTodo(newTodo).then((res) => {
				state.todos = [res, ...state.todos];
			});
		});
	};

	const deleteTodo = () => {
		View.todoListEl.addEventListener('click', (event) => {
			const { id } = event.target;
			if (event.target.className === 'btn--delete') {
				APIs.deleteTodo(id).then((res) => {
					state.todos = state.todos.filter((todo) => {
						return +todo.id !== +id;
					});
				});
			}
		});
	};

	const editTodo = () => {
		let save = false;
		View.todoListEl.addEventListener('click', (event) => {
			const { id } = event.target;
			if (event.target.className === 'btn--edit') {
				save = !save;
				const inputField = document.querySelector('.editable');
				inputField.setAttribute('contenteditable', true);
				console.log(save);
				if (!save) {
					APIs.editTodo(inputField.innerText, id).then((res) => {
						if (state.todos.id === id) {
							state.todos.content = inputField.innerText;
						}
					});
				}
			}
		});
	};

	const completedTodo = () => {
		View.todoListEl.addEventListener('click', (event) => {
			const { id } = event.target.parentElement.id;
			if (event.target.className === 'editable') {
				if (event.target.id === 'active') {
					event.target.style.textDecoration = 'line-through';
					event.target.id = 'completed';
					// APIs.updateTodo(state.todos, id).then(
					// 	(res) => {
					var index = state.todos
						.map(function (e) {
							return e.content;
						})
						.indexOf(event.target.innerText);
					if (event.target.id === 'active') {
						var item = state.todos.splice(index, 1);
						state.todos.concat(item);
					}
					console.log(state.todos);
					// 	}
					// );
				} else {
					event.target.style.textDecoration = 'none';
					event.target.id = 'active';
				}
			}
		});
	};

	const bootstrap = () => {
		getTodos();
		addTodo();
		deleteTodo();
		editTodo();
		completedTodo();
		state.subcribe(() => {
			View.renderTodoList(state.todos);
		});
	};

	return {
		bootstrap,
	};
})(Model, View);

ViewModel.bootstrap();
