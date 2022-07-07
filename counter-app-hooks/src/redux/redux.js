/* 
  action
  reducer: pure function
  store
  view(component)

*/

import { createStore } from "redux";

function counterReducer(state = { counter: 0 }, action) {
  switch (
    action.type //pure function
  ) {
    case "COUNTER/INCREMENT":
      return { counter: state.counter + 1 };
    case "COUNTER/DECREMENT":
      return { counter: state.counter - 1 };
    case "COUNTER/CLEAR":
      return { counter: 0};
    default:
      return state;
  }
}

const store = createStore(counterReducer);

export const { dispatch, getState, subscribe } = store;

subscribe(() => {
  console.log("current State", getState());
});

dispatch({ type: "COUNTER/INCREMENT" });//1

dispatch({ type: "COUNTER/DECREMENT" });//0

dispatch({ type: "COUNTER/DECREMENT" });//-1

dispatch({ type: "COUNTER/CLEAR" });//0
