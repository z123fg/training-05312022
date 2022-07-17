import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"

export const incrementAndPrint = () => (dispatch, getState) =>{
    setTimeout(() => {
        console.log("setTimeout");
    },1000);
    dispatch({type: "COUNTER/INCREMENT"});
}

// const getBookList = () => (dispathch, getState) => {
//     getBookListApi(URL). then(res => {
//         dispatch ({type: "UPDATEBOOKLIST", payload:res})})
//     })
// }


export const increment = () => ({type:"COUNTER/INCREMENT"});

function counterReducer(
    state={counter:0, nested: { nestedArr: [] }}, 
    action){
    switch(action.type){
        case "COUNTER/INCREMENT":
            return{...state, counter:state.counter+1};
        case "COUNTER/DECREMENT":
            return{...state, counter:state.counter-1};
        case "COUNTER/CLEAR":
            return {...state, counter: 0};
        case "COUNTER/PUSHARR":
            return {
                ...state,
                nested: { nestedArr: [...state.nested.nestedArr, action.payload]},
            };
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

const myThunk = function(store) {
    return function(next) {
        return function(action){
            try{
            console.log("action", action);
            if (typeof action === "object"){
                next(action);
            } else if (typeof action === "function"){
                console.log(store);
                action(store.dispatch, store.getState);
                next();
            }
        } catch (err) {}
    }
    }
}

const store = createStore(counterReducer, applyMiddleware(myThunk));

export const {dispatch, getState, subscribe} = store;
console.log(dispatch, getState, subscribe);

//export store; 
subscribe(() => {
    console.log("current State", getState());
});

// store.dispatch({type:"COUNTER/INCREMENT"});//1
// store.dispatch({type:"COUNTER/DECREMENT"});//0
// store.dispatch({type:"COUNTER/DECREMENT"});//-1
// store.dispatch({type:"COUNTER/CLEAR"});//0