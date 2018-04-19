import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import { NavigationActions } from 'react-navigation'


const BlackStyleTextInput = ({pholder, sub, imagelink }) => (
  <View marginBottom='2%' width='80%' alignSelf='center' justifyContent='center' >
    <View
    style = {styles.viewStyle} width='100%'>
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
      <TouchableOpacity alignSelf = 'flex-end'>
        <Image
        source={imagelink}
        alignSelf = 'flex-end'
        justifyContent= 'flex-end'
        />
      </TouchableOpacity>
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
  changeFunction: PropTypes.func,
  icon: PropTypes.string,
}

export default BlackStyleTextInput
