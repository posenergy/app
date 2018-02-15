import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const StyleTextInput = ({pholder, changeFunction, cap, passwordSecure, nameProp, sizeProp, colorProp}) => (
<<<<<<< HEAD
  <TextInput
    style={styles.styleTextInput}
=======
  <TextInput 
    style={styles.styleTextInput} 
>>>>>>> a752cec290e289fc7eea37d3632d3744b4c9d11b
    placeholder={pholder}
    onChangeText={changeFunction}
    autoCapitalize="none"
    secureTextEntry={passwordSecure}
  />
)

StyleTextInput.propTypes = {
  pholder: PropTypes.string,
  cap: PropTypes.string,
  passwordSecure: PropTypes.bool,
  changeFunction: PropTypes.func,
}

export default StyleTextInput
