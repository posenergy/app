import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default class EmailInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
    }
  }
  render () {
    return (
      <TextInput style={styles.emailInput}
        placeholder="Email"
        onChangeText ={email => this.setState({email})}
      />
    );
  }
};
