// ***************** filter functionality **************************

/** STEP 1- HTML file
 * <button type="button" class="btn--select-all">All Complete Tasks</button>
 *  */

/** STEP 2 - CSS file
 * .btn--select-all {
        background-color: var(--yellow-green);
        text-transform: uppercase;
        padding: 0.375rem 0.75rem;
        font-size: 0.875rem;
        border: 2px solid var(--yellow-green);
        color: var(--traffic-white);
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: 0.2rem;
    }
 */

/** STEP 3 - index.js
 * View -
 * const btnSelectAll = document.querySelector(".btn--select-all"); 
 * Don't forget to return it as an object in the IIFE view !!!
 * 
 * ViewModel -
 * const filerAllCompleted = () => {
        View.btnSelectAll.addEventListener("click", (event) => {
            state.todos = state.todos.filter(todo => todo.complete !== false)
        })
    }

    Don't forget to invoke in the bootstrap!!!
 * 
 */


// *********************************** Search Functionality *********************************
/** STEP 1 - HTML file
 * 
<div class="todo__search-container">
            <input type="text" placeholder="please enter a task name" class="todo__search--input"/>
            <button type="button" class="btn--search">Search</button>
</div>

 */

/** STEP 2 - CSS
 .todo__search-container {
        display:flex;
        justify-items: center;
        align-items: center;
        gap: 10px;
   }

   .btn--search {
    background-color: var(--blue);
    text-transform: uppercase;
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    border: 2px solid var(--blue);
    color: var(--traffic-white);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
   }

/** step 3 - JS file
 * 
 * View -
 const search = document.querySelector(".todo__search-container");
 const input = document.querySelector(".todo__search--input");
 
 * Don't forget to return these objects !!!!
 
 
* ModelView -
const searchTodo = () => {

        View.search.addEventListener("click", (event) => {
            let searchItem = View.input.value.toLowerCase();
            state.todos = state.todos.filter(todo => todo.content.toLowerCase().includes(searchItem))
            View.input.value = "";
            if (state.todos.length === 0) {
                displayAlert("No Result Found", "danger")
            }
        })
}
 *
Don't forget to invoke searchTodo() in bootstrap !!!!

 *  */   






