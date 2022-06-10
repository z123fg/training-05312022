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

    const editTodo = (id, updateTodos) =>{
        return fetch(`${URL}/${id}`,{
            method:"PATCH",
            body: JSON.stringify(updateTodos),
            headers:{
                'Content-Type':'application/json'
            }

        }).then((res)=>{
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
        deleteTodo,
        addTodo,
        editTodo
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
        #edit
        constructor() {
            this.#todos = [];
            this.#onChangeCb = () => { };
            this.#edit = false;
        }
        get todos() {
            return this.#todos
        }
        get edit(){
            return this.#edit;
        }
        set todos(newTodos) {
            this.#todos = newTodos;
            this.#onChangeCb();
        }
        set edit(newEdit){
            this.#edit = newEdit;
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
    const renderTodolist = (todos) => {
       
            let template = "";
            todos.sort((a,b)=>b.id-a.id).forEach((todo) => {
            template += `
                <li><span class="span--list" id="${todo.id}">${todo.content}</span><button class="btn--edit" id="${todo.id}">Edit<button class="btn--delete" id="${todo.id}">Delete</button></li>
            `
            })
            todoListEl.innerHTML = template;
    
    }



    const getUpdateTodos_before = (id,currentContent) =>{
        let template = ""
                template+=`<li><input id="${id}"value="${currentContent}"/>
                <button class="btn--edit" id="${id}">Edit
                <button class="btn--delete" id="${id}">Delete</button></li>`
        console.log("Before" +currentContent);
        todoListEl.innerHTML = template;
    }

    const getUpdateTodos_after = (id, updateTodos) => {
        // let template = ""
        //         template+=`<li><input id="${id}"value="${currentContent}"/>
        //         <button class="btn--edit" id="${id}">Edit
        //         <button class="btn--delete" id="${id}">Delete</button></li>`
        console.log("After" + updateTodos);
        //todoListEl.innerHTML = template;
    }

    return {
        formEl,
        renderTodolist,
        todoListEl,
        getUpdateTodos_before,
        getUpdateTodos_after
    }
})();



const ViewModel = ((Model, View) => {
    const state = new Model.State();
    const todoListEl = document.querySelector(".todo__list");

    const addTodo = () => {
        View.formEl.addEventListener("submit", (event) => {
            event.preventDefault();
            const content = event.target[0].value;
            console.log("Content " + event.target[0]);
            if(content.trim() === "") return;
            const newTodo = { content }
            APIs.addTodo(newTodo).then(res => {
                state.todos = [res, ...state.todos];
            })

        })
    }

    const completeTodo=()=>{
        View.todoListEl.addEventListener("click",(event)=>{
            event.preventDefault();
            const {id} = event.target;
            if(event.target.className === "span--list"){
                event.target.style.setProperty("text-decoration", "line-through");
            }
        })
    }

    const editTodo = ()=>{
        View.todoListEl.addEventListener("click",(event)=>{
            event.preventDefault();
            console.log(event.currentTarget, event.target);
            const {id} = event.target;
            var currentContent = event.target.parentNode.firstElementChild.innerHTML;
            

            if(event.target.className === "btn--edit" && state.edit == false)
            {  
                // var storedValue = "";
                // storedValue = event.target.parentNode.firstElementChild.innerHTML;
                // console.log("StoredValue " + storedValue);
                //console.log("In loop "+ event.currentTarget, event.target);

                View.getUpdateTodos_before(id,currentContent);
                // APIs.editTodo(id, updateTodos).then(res =>{
                //     console.log("Res",res);

                // })
                state.edit = true;
                console.log("State edit --true" + state.edit)
                //View.getUpdateTodos(updateTodos);
                //event.stopPropagation();
            }

            if(event.target.className === "btn--edit" && state.edit == true){
                console.log("In true "+ event.currentTarget.elements);
            }

            currentContent = event.target.value;
            console.log("Current content "+ currentContent)

            View.getUpdateTodos_after(id, currentContent);
            
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

    const getTodos = ()=>{
        APIs.getTodos().then(res=>{
            state.todos = res;
        })
    }

    const bootstrap = () => {
        addTodo();
        editTodo();
        deleteTodo();
        getTodos();
        completeTodo();
        state.subscirbe(() => {
            View.renderTodolist(state.todos)
        });
    }
    return {
        bootstrap
    }
})(Model, View);

ViewModel.bootstrap();


