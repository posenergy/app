import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

const BlackStyleTextInput = ({pholder, sub, changeFunction, cap, passwordSecure, nameProp, sizeProp, imagelink }) => (
  <View marginBottom={12} >
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
    <Text style={styles.sub}>
      {sub}
    </Text>
  </View>
)

BlackStyleTextInput.propTypes = {
  pholder: PropTypes.string,
  cap: PropTypes.string,
  sub: PropTypes.string,
  passwordSecure: PropTypes.bool,
  changeFunction: PropTypes.func,
  icon: PropTypes.string,
}

export default BlackStyleTextInput

