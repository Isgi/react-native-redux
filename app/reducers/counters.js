const initialState = {
  counter: 0
}
const reducer = function(state = initialState, action){
  switch(action.type){
    case "INC":
      return {...state, counter: state.counter + action.payload}
    case "DEC":
      return {...state, counter: state.counter - action.payload}
    default:
      return state
  }
}
export default reducer