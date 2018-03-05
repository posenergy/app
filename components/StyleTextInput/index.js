import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

const StyleTextInput = ({pholder, changeFunction, cap, passwordSecure, nameProp, sizeProp, colorProp}) =>
  <TextInput
    style={styles.styleTextInput}
    placeholder={pholder}
    onChangeText={changeFunction}
    autoCapitalize="none"
    secureTextEntry={passwordSecure}
  />

StyleTextInput.propTypes = {
  pholder: PropTypes.string,
  cap: PropTypes.string,
  passwordSecure: PropTypes.bool,
  changeFunction: PropTypes.func,
}

export default StyleTextInput
