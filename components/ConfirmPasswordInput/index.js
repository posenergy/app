import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default class ConfirmPasswordInput extends Component {
  render () {
    return (
      <TextInput
        style={styles.confirmpasswordInput}
          placeholder="Confirm Password"/>
    );
  }
};
