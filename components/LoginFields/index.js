import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

import UsernameInput from '../UsernameInput';
import PasswordInput from '../PasswordInput';
import ForgotPassword from '../ForgotPassword';

export default class LoginFields extends Component {
  render () {
    return (
      <View style={styles.container}> 
          <UsernameInput />
          <PasswordInput />
          <ForgotPassword />
      </View>
    );
  }
};