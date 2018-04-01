import React, {Component} from 'react'
import { Provider, connect } from 'react-redux';

import AppWithNavigationState, {store} from './app/navigators'

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}