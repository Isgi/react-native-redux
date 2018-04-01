import store from '../store'

export function inc(){
  store.dispatch({type: 'INC', payload: 2})
}

export function dec(){
  store.dispatch({type: 'DEC', payload: 3})
}
