import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default class PasswordInput extends Component {
  render () {
    return (
      <TextInput 
        style={styles.passwordInput}
          placeholder="Password"/>
    );
  }
};