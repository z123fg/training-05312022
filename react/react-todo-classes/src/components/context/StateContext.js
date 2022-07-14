import axios from "axios";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const BASE_URL = "http://localhost:3500/todos";

const StateContext = React.createContext();

class StateProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // search
      search: "",
      searchResults: [],
      isSearchOpen: false,

      // mobile menu
      isMenuOpen: false,

      // all todos
      todos: [],
      isLoading: false,
      errorMessage: "",
      completeCount: 0,
      incompleteCount: 0,

      // todo
      todoTitle: "",
      todoDescription: "",

      // edit todo
      editTitle: "",
      editDescription: "",
    };
  }

  componentDidMount = () => {
    this.setTodos();
  };

  componentDidUpdate = () => {
    this.handleAlternateMenus();

    this.setSearchResults();

    console.log(this.state.searchResults);

    if (this.state.todos !== this.state.todos) {
      this.setTodos();
    }
  };

  // cleanup if both menus are open
  handleAlternateMenus = () => {
    const isMenuOpen = this.state.isMenuOpen;
    const isSearchOpen = this.state.isSearchOpen;

    if (isMenuOpen && isSearchOpen) {
      this.setState(() => ({
        isSearchOpen: false,
      }));
      this.setState(() => ({
        isMenuOpen: false,
      }));
    }
  };

  setTodoCounts = (responseData) => {
    // need componentDidUpdate for refresh on task status change
    const iCR = responseData.filter((todo) => todo.isComplete === false);
    const cCR = responseData.filter((todo) => todo.isComplete === true);
    this.setState({
      incompleteCount: iCR.length,
    });
    this.setState({
      completeCount: cCR.length,
    });
  };

  // all todos
  setTodos = async () => {
    this.setState({
      isLoading: true,
    });

    try {
      // eslint-disable-next-line
      const data = await axios.get(BASE_URL).then((res) => {
        this.setState({
          todos: res.data,
        });

        // console.log(res.data);
        // Get counts of incomplete and complete todos
        this.setTodoCounts(res.data);
      });
    } catch {
      this.setState({
        errorMessage: "Error Loading All Todos",
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  // add todo
  handleSubmitTodo = async (e) => {
    const todos = this.state.todos;
    const todoTitle = this.state.todoTitle;
    const todoDesc = this.state.todoDescription;
    e.preventDefault();

    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = {
      id,
      title: todoTitle,
      description: todoDesc,
      isComplete: false,
    };
    try {
      const res = await axios.post(BASE_URL, newTodo);
      const allTodos = [...todos, res.data];

      this.setState({
        todos: allTodos,
      });

      // update todo count
      this.setTodoCounts(res.data);
    } catch {
      this.setState({
        errorMessage: "Error Submitting Todo",
      });
    } finally {
      // reset inputs
      this.setState({
        todoTitle: "",
      });
      this.setState({
        todoDescription: "",
      });
    }
  };

  setTodoTitle = (e) => {
    this.setState({
      todoTitle: e.target.value,
    });
  };
  setTodoDescription = (e) => {
    this.setState({
      todoDescription: e.target.value,
    });
  };

  handleDeleteTodo = async (id) => {
    const todos = this.state.todos;
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      const todosList = todos.filter((todo) => todo.id !== id); 
      this.setState({
        todos: todosList,
      })
    } catch {
      this.setState({
        errorMessage: "Error Submitting Todo",
      });
    }
  }

  handleNavigate = (pathname) => {
    const navigate = useNavigate();
    navigate(pathname);
  };

  // search
  handleToggleSearch = () => {
    this.setState((prevState) => ({
      isSearchOpen: !prevState.isSearchOpen,
    }));
    // cleanup
    this.setState(() => ({
      search: "",
    }));
  };

  setSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  // setSearchResults = () => {
  //   const search = this.state.search;
  //   const todos = this.state.todos;
  //   const searchResults = this.state.searchResults;

  //   let tempResults = [];

  //   if (search !== "") {
  //     let tempResults = todos.filter(
  //       (todo) => todo.title.toLowerCase().includes(search.toLowerCase())
  //     );
  //     console.log(tempResults);
  //     return tempResults;
  //   }
  //   // else {
  //   //   let tempResults = todos
  //   //   console.log(tempResults);
  //   // }
  // };

  setSearchResults = () => {
    const search = this.state.search;
    const todos = this.state.todos;
    const searchResults = this.state.searchResults;
    let tArr = todos.filter((todo) =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    );

    // if (search !== "") {
    //   this.setState({
    //     searchResults: tArr,
    //   });
    // } else {
    //   this.setState({
    //     searchResults: todos,
    //   })
    // }
  };

  // mobile menu
  handleToggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const { children } = this.props;

    const { handleNavigate } = this;

    // todos
    const { todos } = this.state;
    const { isLoading } = this.state;
    const { completeCount } = this.state;
    const { incompleteCount } = this.state;
    const { todoTitle } = this.state;
    const { todoDescription } = this.state;
    const { errorMessage } = this.state;
    const { setTodos } = this;
    const { handleSubmitTodo } = this;
    const { setTodoTitle } = this;
    const { setTodoDescription } = this;
    const { handleDeleteTodo } = this;
    const { setTodoCounts } = this;
 
    // search
    const { search } = this.state;
    const { setSearch } = this;
    const { searchResults } = this.state;

    const { setSearchResults } = this;
    const { isSearchOpen } = this.state;
    const { handleToggleSearch } = this;

    // mobile menu
    const { isMenuOpen } = this.state;
    const { handleToggleMenu } = this;

    return (
      <StateContext.Provider
        value={{
          handleNavigate,

          todos,
          isLoading,
          completeCount,
          incompleteCount,
          todoTitle,
          todoDescription,
          errorMessage,
          setTodos,
          handleSubmitTodo,
          setTodoTitle,
          setTodoDescription,
          handleDeleteTodo,
          setTodoCounts,

          search,
          setSearch,
          searchResults,
          setSearchResults,
          isSearchOpen,
          handleToggleSearch,

          isMenuOpen,
          handleToggleMenu,
        }}
      >
        {children}
      </StateContext.Provider>
    );
  }
}

export default StateContext;
export { StateProvider };

// handleUpdateStatus = async (id) => {
//   const todos = this.props.todos
//   const updatedTodo = {
//     id,
//     title: this.props.todos.title,
//     isCompleted: this.props.updatedStatus,
//     description: this.props.todos.description,
//   };
//   try {
//     const response = await axios.put(`${BASE_URL}/${id}`, updatedTodo);
//     this.setState(() => (
//       todos.map((todo) => (todo.id === id ? { ...response.data } : todos))
//     ));
//   } catch {
//     console.log("Error in toggling Status");
//   }
// };

// handleUpdateStatus = async (id) => {
//   const updatedTodo = {
//     id,
//     title: this.props.todos.title,
//     isCompleted: this.props.updatedStatus,
//     description: this.props.todos.description,
//   };
//   try {
//     const response = await axios.put(`${BASE_URL}/`)
//   }
// };

// {
//   "id": 1,
//   "title": "Appreciate Rick Rubin",
//   "isComplete": true,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
// {
//   "id": 2,
//   "title": "Listen to Kanye West",
//   "isComplete": true,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
// {
//   "id": 3,
//   "title": "Listen to Marty Robbins",
//   "isComplete": false,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
// {
//   "id": 4,
//   "title": "Listen to Otis Redding",
//   "isComplete": false,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
// {
//   "id": 5,
//   "title": "Listen to The Black Keys",
//   "isComplete": true,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
// {
//   "id": 6,
//   "title": "Listen to Jimi Hendrix",
//   "isComplete": false,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
// {
//   "id": 7,
//   "title": "Listen to The Kinks",
//   "isComplete": true,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
// {
//   "id": 8,
//   "title": "Listen to Sturgill Simpson",
//   "isComplete": true,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
// {
//   "id": 9,
//   "title": "Listen to Unknown Mortal Orchestra",
//   "isComplete": false,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
// {
//   "id": 10,
//   "title": "Listen to Wu-Tang Clan",
//   "isComplete": false,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
// {
//   "id": 11,
//   "title": "Listen to Wilco",
//   "isComplete": true,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
// {
//   "id": 12,
//   "title": "Listen to The Arcs",
//   "isComplete": false,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
// {
//   "id": 13,
//   "title": "Listen to Freddie Gibbs",
//   "isComplete": true,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
// {
//   "id": 14,
//   "title": "Listen to Sam Cooke",
//   "isComplete": false,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
// {
//   "id": 15,
//   "title": "Listen to Benny the Butcher",
//   "isComplete": false,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
// {
//   "id": 16,
//   "title": "Listen to Dr. Dog",
//   "isComplete": true,
//   "description": "Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. Here is a example Todo description. "
// },
