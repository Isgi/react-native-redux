import {
  StackNavigator,
  addNavigationHelpers,
} from 'react-navigation';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import React from 'react';

//others
import reducers from '../reducers'

//screens
import Login from '../Login';
import Todos from '../Todos';
import TodoDetail from '../TodoDetail';
import Counters from '../Counters';

const AppNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Counters: {
    screen: Counters,
    navigationOptions: {
      title: 'Counters'
    }
  },
  Todos: {
    screen: Todos,
    navigationOptions: {
      title: 'Todos'
    }
  },
  TodoDetail: {
    screen: TodoDetail,
    navigationOptions: {
      title: 'Todo Detail'
    }
  },
}, {
  initialRouteName: 'Counters'
});

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

class App extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  reducers,
  applyMiddleware(middleware),
);
export {
  AppNavigator,
  store
}
export default AppWithNavigationState