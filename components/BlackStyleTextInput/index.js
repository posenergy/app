import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

const BlackStyleTextInput = ({pholder, sub, changeFunction, cap, passwordSecure, nameProp, sizeProp, imagelink }) => (
  <View marginBottom='2%' width='80%' alignSelf='center' justifyContent='center' >
    <View
    style = {styles.viewStyle}>
    <Image
      source={imagelink}
      alignSelf = 'center'
      justifyContent= 'flex-start'
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
