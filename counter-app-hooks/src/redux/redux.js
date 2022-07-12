/* 
  action
  reducer: pure function
  store
  view(component)

*/

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

/* 
  thunk allows you to dispatch a function
  without thunk you can only dispatch action object
*/

export const incrementAndPrint /* action creator */ =
  () => (dispatch, getState) => {
    setTimeout(() => {
      //side Effect
      console.log("setTimeout");
    }, 1000);
    dispatch({ type: "COUNTER/INCREMENT" });
    /* 
      getBooklist api,
      then, dispatch, update state
    
    */
  };

/*  
 const getBookList = () => (dispatch, getState) => {
    getBookListApi(URL).then(res=>{
      dispatch({type:"UPDATEBOOKLIST", payload:res})
    }).catch((err)=>{
      dispatch({type:"UPDATEBOOKLISTFAILED"})
    })
  } 
  */

export const increment = () => ({ type: "COUNTER/INCREMENT" });

function counterReducer(
  state = { counter: 0, nested: { nestedArr: [] } },
  action
) {
  //pure function,
  switch (
    action.type //dot notation
  ) {
    case "COUNTER/INCREMENT": {
      //setTimeout(()=>{console.log("setTimeout")},1000)
      return { ...state, counter: state.counter + 1 };
    }

    case "COUNTER/DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "COUNTER/CLEAR":
      return { ...state, counter: 0 };
    case "COUNTER/PUSHARR":
      return {
        ...state,
        nested: { nestedArr: [...state.nested.nestedArr, action.payload] },
      };
    default:
      return state;
  }
}

/* 


  const obj ={
    a:1
  }
  const b = "a";

  obj.b //undefined
  obj[b] // 1

  a.b //obj
  a[] //arr ,obj
  a() //function

*/

const myCreateStore = (reducerFn) => {
  const callbackArray = [];

  let state = reducerFn(undefined, {});

  const dispatch = (action) => {
    state = reducerFn(state, action === undefined ? {} : action);
    callbackArray.forEach((cb) => cb());
  };

  const getState = () => {
    return state;
  };

  const subscribe = (callback) => {
    callbackArray.push(callback);
  };
  const store = {
    dispatch,
    getState,
    subscribe,
  };
  return store;
};

/* 
  const myThunk = store => next => action => {

  }

*/

const myThunk = function (store) {
  return function (next) {
    return function (action) {
      try {
        if (typeof action === "object") {
          next(action);
        } else if (typeof action === "function") {
          //console.log(store)
          action(store.dispatch, store.getState);
          next();
        }
      } catch (err) {}
    };
  };
};

export const store = createStore(counterReducer, applyMiddleware(myThunk));

export const { dispatch, getState, subscribe } = store;

subscribe(() => {
  console.log("current State", getState());
});
/* 
dispatch({ type: "COUNTER/INCREMENT" });//1

dispatch({ type: "COUNTER/DECREMENT" });//0

dispatch({ type: "COUNTER/DECREMENT" });//-1

dispatch({ type: "COUNTER/CLEAR" });//0 */
