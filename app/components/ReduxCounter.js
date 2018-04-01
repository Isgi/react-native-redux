import {createStore} from 'redux'

//REDUCER
const initialState = {
  counter: 0,
  whatever: "abc"
}
const reducer = function(state=initialState, action){
  switch(action.type){
    case "INC":
      return {...state, counter: state.counter + action.payload}
    case "DEC":
      return {...state, counter: state.counter - action.payload}
    case "CHANGE_WHATEVER":
      return {...state, whatever: action.payload}
    case "INC_AND_CHANGE_WHATEVER":
      const {counter, whatever} = action.payload
      return {
        ...state,
        counter: state.counter + counter,
        whatever
      }
    default:
      return state
  }

}

//STORE
const store = createStore(reducer)

//SUBSCRIBE
store.subscribe(()=>{
  console.log(store.getState());
})

//DISPATCH - ACTIONS
store.dispatch({type: 'INC', payload: 2}) //+2 bro
store.dispatch({type: 'INC', payload: 5}) //+5 coy
store.dispatch({
  type: "INC_AND_CHANGE_WHATEVER",
  payload: {
    counter: 2,
    whatever: "beniiii super cool"
  }
})
store.dispatch({type: 'DEC', payload: 1})
store.dispatch({type: 'CHANGE_WHATEVER', payload: "beni cool"})