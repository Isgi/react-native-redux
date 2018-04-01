import store from '../store'

export function allTodos(){
  store.dispatch({
    type: 'ALL_TODOS',
    payload: [
      {id: "1", title: "whatever"}
    ]
  })
}

export function getTodo(){
  store.dispatch({
    type: 'GET_TODO',
    payload: {
      id: "1",
      title: "whatever"
    }
  })
}
