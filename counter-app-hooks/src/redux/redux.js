/* 
  action
  reducer: pure function
  store
  view(component)

*/

import { createStore } from "redux";

function counterReducer(
  state = { counter: 0, nested: { nestedArr: [] } },
  action
) {
  //pure function,
  switch (
    action.type //dot notation
  ) {
    case "COUNTER/INCREMENT":
      return { ...state, counter: state.counter + 1 };
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

export const store = createStore(counterReducer);

export const { dispatch, getState, subscribe } = store;

subscribe(() => {
  console.log("current State", getState());
});
/* 
dispatch({ type: "COUNTER/INCREMENT" });//1

dispatch({ type: "COUNTER/DECREMENT" });//0

dispatch({ type: "COUNTER/DECREMENT" });//-1

dispatch({ type: "COUNTER/CLEAR" });//0 */
