import {createStore, combineReducers} from 'redux'

//REDUCERS

//1. Reducer: counter reducers
const countersInitialState = {
  counter: 0
}
const countersReducer = function(state=countersInitialState, action){
  switch(action.type){
    case "INC":
      return {...state, counter: state.counter + action.payload}
    case "DEC":
      return {...state, counter: state.counter - action.payload}
    default:
      return state
  }
}

//2. Reducer: todos reducers
const todosInitialState = {
  todos: [],
  formValues: {},
  todo: {}
}
const todosReducer = function(state=todosInitialState, action){
  switch(action.type){
    case "ALL_TODOS":
      return {...state, todos: action.payload}
    case "GET_TODO":
      return {...state, todo: action.payload}
    case "SET_FORM":
      return {...state, formValues: action.payload}
    default:
      return state
  }
}

//STORE
const store = createStore(combineReducers({
  countersReducer,
  todosReducer
}))

//SUBSCRIBE
store.subscribe(()=>{
  console.log('TESSSsssssss')
  console.log(store.getState());
})

//ACTIONS - DISPATCHERS

//1. Actions: counters
store.dispatch({type: "INC", payload: 2})
store.dispatch({type: "DEC", payload: 4})

//2. Actions: todos
store.dispatch({
  type: "ALL_TODOS",
  payload: [
    {id: "1", title: "whatever"},
    {id: "2", title: "pulang"},
  ]
})
store.dispatch({
  type: "GET_TODO",
  payload: {
    id: "1",
    title: "whatever"
  }
})