import { combineReducers } from 'redux';

import countersReducer from './counters'
import todosReducer from './todos'
import {AppNavigator} from '../navigators'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Todos'));

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const reducers = combineReducers({
  nav: navReducer,
  countersReducer,
  todosReducer
})
export default reducers