import React, { Component } from 'react';
import { Text, Linking} from 'react-native';
import styles from './styles';

export default class ForgotPassword extends Component {
  resetPassword = () => 
    Linking.openURL('https://google.com')
           .catch(err => console.error('An error occurred', err))
  
  render () {
    return (
        <Text style={styles.link} onPress={this.resetPassword}>
          Forgot Password?
        </Text>
    )
  }
};