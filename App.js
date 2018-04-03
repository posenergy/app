/**
 * positive-energy App
 * https://github.com/hsadev/positive-energy
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

import Root from './navigations/AppNavigator'

export default class App extends Component<{}> {
  render() {
    return (

      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}