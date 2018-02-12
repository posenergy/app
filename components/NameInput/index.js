import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default class NameInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
    }
  }

  render () {
    return (
      <TextInput
        style={styles.nameInput}
        placeholder="Name"
        onChangeText ={username => this.setState({name})}
      />
    );
  }
};
