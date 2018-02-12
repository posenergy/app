import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default class ConfirmPasswordInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      confirmpassword: '',
    }
  }
  render () {
    return (
      <TextInput style={styles.confirmpasswordInput}
        placeholder="Confirm Password"/>
        onChangeText ={confirmpassword => this.setState({confirmpassword})}
    );
  }
};
