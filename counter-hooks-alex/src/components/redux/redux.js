import {createStore} from "redux";

function counterReducer(state={counter:0}, action){
    switch(action.type){
        case "COUNTER/INCREMENT":
            return{counter:state.counter+1};
        case "COUNTER/DECREMENT":
            return{counter:state.counter-1};
        case "COUNTER/CLEAR":
            return {counter: 0}
        default: 
            return state;
    }
}

const myCreateStore  = (reducerFn) =>{
    const callbackArray = [];

    let state = reducerFn(undefined,{});
    
    const dispatch = (action) =>{
        state = reducerFn(state,action===undefined?{}:action);
        callbackArray.forEach(cb=>cb());
    }

    const getState = () =>{
        return state;
    }

    const subscribe = (cb) =>{
        callbackArray.push(callback);
    }
    
    const store = {
        dispatch,
        getState, 
        subscribe
    }

    return store;
}

const store = myCreateStore(counterReducer);

export const {dispatch, getState, subscribe} = store;
console.log(dispatch, getState, subscribe);

//export store; 
subscribe(() => {
    console.log("current State", getState());
})

store.dispatch({type:"COUNTER/INCREMENT"});//1
store.dispatch({type:"COUNTER/DECREMENT"});//0
store.dispatch({type:"COUNTER/DECREMENT"});//-1
store.dispatch({type:"COUNTER/CLEAR"});//0