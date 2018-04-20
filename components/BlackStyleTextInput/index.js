import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import { NavigationActions } from 'react-navigation'


const BlackStyleTextInput = ({pholder, sub, onPress, linked, imagelink }) => (
  <View marginBottom='2%' width='80%' alignSelf='center' justifyContent='center' >
    <View
    style = {styles.viewStyle}>
    <Image
      source={imagelink}
      alignSelf = 'center'
      style = {styles.image}
    />
    <Text
      style={styles.styleTextInput}
      autoCapitalize="none">
      {pholder}
    </Text>
    { linked &&
      <TouchableOpacity onPress={onPress}>
        <Image
        style={{alignSelf:'flex-start', justifyContent: 'flex-end', width: 25, height: 25, resizeMode: 'contain',}}
        source={require('../../images/arrow.png')}
        />
      </TouchableOpacity>
    }
    </View>
    <Text style={styles.sub}>
      {sub}
    </Text>
  </View>
)

BlackStyleTextInput.propTypes = {
  pholder: PropTypes.string,
  linked: PropTypes.bool,
  cap: PropTypes.string,
  sub: PropTypes.string,
  onPress: PropTypes.func,
  icon: PropTypes.string,
}

export default BlackStyleTextInput
