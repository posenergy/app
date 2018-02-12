import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default class PasswordInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      password: '',
    }
  }
  render () {
    return (
      <TextInput style={styles.passwordInput}
        placeholder="Password"
        onChangeText = {password => this.setState({password})}/>
    );
  }
};
