import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default class UsernameInput extends Component {
  render () {
    return (
      <TextInput style={styles.usernameInput} 
        placeholder="Username"
      />
    );
  }
};