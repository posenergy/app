import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default class UsernameInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
    }
  }

  render () {
    return (
      <TextInput
        style={styles.UsernameInput}
        placeholder="Username"
        onChangeText ={username => this.setState({username})}
      />
    );
  }
};
