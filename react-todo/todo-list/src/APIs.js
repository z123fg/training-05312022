const APIs = (() => {
    const URL = "http://localhost:3000/todos"
    //POST
    const addTodo = (newTodos) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodos)
           
        })
        .then((res)=> {return res.json()})
        .catch(err => {console.log(err)})
    }
    // GET
    const getTodos = () => {
        return fetch(URL).then(res => {return res.json()}).catch(err => {console.log(err)})
    }

    // DELETE
    const deleteTodo = (id) => {
        return fetch(`${URL}/${id}`,{
            method: "DELETE"
        })
        .then((res)=>{return res.json()})
        .catch(err=> {console.log(err)})
    }
    // PUT
    const updateTodo = (id, updatedTodo) => {
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTodo)
           
        })
    }
    return {getTodos, addTodo, deleteTodo, updateTodo}
})()  

export default APIs;