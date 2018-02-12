import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default class GenderInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      gender: '',
    }
  }
  render () {
    return (
      <TextInput style={styles.genderInput}
        placeholder="Gender"
        onChangeText ={gender => this.setState({gender})}
      />
    );
  }
};
