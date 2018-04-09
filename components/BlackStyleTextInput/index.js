import React from 'react'
import { View, Image, TextInput } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

const StyleTextInput = ({pholder, changeFunction, cap, passwordSecure, nameProp, sizeProp, imagelink }) => (
  <View
  style = {styles.viewStyle}>
  <Image
    source={imagelink}
    style = {styles.image}
  />
  <TextInput
    style={styles.styleTextInput}
    placeholder={pholder}
    onChangeText={changeFunction}
    autoCapitalize="none"
    secureTextEntry={passwordSecure}
  />
  </View>
)

StyleTextInput.propTypes = {
  pholder: PropTypes.string,
  cap: PropTypes.string,
  passwordSecure: PropTypes.bool,
  changeFunction: PropTypes.func,
  icon: PropTypes.string,
}

export default StyleTextInput

