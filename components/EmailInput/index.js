import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default class EmailInput extends Component {
  render () {
    return (
      <TextInput style={styles.emailInput}
        placeholder="Email"
      />
    );
  }
};
