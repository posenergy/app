import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

const StyleTextInput = ({pholder, changeFunction, cap, passwordSecure, nameProp, sizeProp, imagelink }) => (
  <View
  style = {styles.viewStyle}>
  <Image
    source={imagelink}
    style = {styles.image}
  />
  <Text
    style={styles.styleTextInput}
    autoCapitalize="none">
  {pholder}
  </Text>
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

