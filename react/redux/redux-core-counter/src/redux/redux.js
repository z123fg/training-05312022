import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "COUNTER_INCREMENT":
      return { counter: state.counter + 1 };
    case "COUNTER_DECREMENT":
      return { counter: state.counter - 1 };
    case "COUNTER_CLEAR":
      return { counter: 0 };
    default:
      return state;
  }
};
const store = createStore(counterReducer);

// Use my store exmaple from Adam's Code       

// Three main Actions (Functions)
export const { dispatch, getState, subscribe } = store;

subscribe(() => {
  console.log("Current State", getState());
});

dispatch({ type: "COUNTER_INCREMENT" });
dispatch({ type: "COUNTER_DECREMENT" });
dispatch({ type: "COUNTER_CLEAR" });