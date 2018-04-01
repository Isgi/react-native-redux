const initialState = {
  todos: [],
  formValues: {},
  todo: {}
}
const reducer = function(state = initialState, action){
  switch(action.type){
    case "ALL_TODOS":
      return {...state, todos: action.payload}
    case "GET_TODO":
      return {...state, todo: action.payload}
    default:
      return state
  }
}
export default reducer