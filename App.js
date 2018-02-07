/**
 * positive-energy App
 * https://github.com/hsadev/positive-energy
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppNavigator from './navigations/AppNavigator';

export default class App extends Component<{}> {
//   constructor(props) {
//     super(props)
//     this.state = {
//       data: null,
//       isFetching: false
//     }
//   }

//   componentDidMount() {
//     this.fetchData()
//   }

//   fetchData = async() => {
//     this.setState({isFetching: true})
//     const data = await fetch('https://mytutor-api.herokuapp.com/users/59d407cea61a040004c337e2')
//     const json = await data.json()
//     this.setState({ data: json, isFetching: false})
//   }

  render() {
    return (
        <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
