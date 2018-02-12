import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

import NameInput from '../NameInput';
import PasswordInput from '../PasswordInput';
import ConfirmPasswordInput from '../ConfirmPasswordInput';
import RestTimeInput from '../RestTimeInput';
import EmailInput from '..//EmailInput';
import GenderInput from '../GenderInput';



export default RegisterFields = props => (
  <View style={styles.container}>
  <NameInput />
  <EmailInput />
  <PasswordInput />
  <ConfirmPasswordInput />
  <GenderInput/>
  <RestTimeInput />
  </View>
)
