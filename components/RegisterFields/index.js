import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles';

import UsernameInput from '../UsernameInput';
import PasswordInput from '../PasswordInput';
import ConfirmPasswordInput from '../ConfirmPasswordInput';
import RestTimeInput from '../RestTimeInput';
import EmailInput from '../EmailInput';

export default class RegisterFields extends Component {
  render () {
    return (
      <View style={styles.container}>
          <UsernameInput />
          <EmailInput />
          <PasswordInput />
          <ConfirmPasswordInput />
          <Text style={styles.link}>
          How much time does it take you to get dressed after a workout?
          </Text>
          <RestTimeInput />
      </View>
    );
  }
};
