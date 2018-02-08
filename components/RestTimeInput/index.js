import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default class RestTimeInput extends Component {
  render () {
    return (
      <TextInput
        style={styles.resttimeInput}
        keyboardType = 'numeric'
        placeholder="Time"/>
    );
  }
};
