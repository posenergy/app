import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

const BlackStyleTextInput = ({pholder, sub, onPress, linked, imagelink }) => (
  <View marginTop= '3%' marginBottom={10} width={310} height='13%' alignSelf='center' justifyContent='center' >
    <Text style={styles.sub}>
      {sub}
    </Text>
    <View
    justifyContent='flex-start'
    style = {styles.viewStyle}>
      <Image
        source={imagelink}
        alignSelf = 'center'
        style = {styles.image}
      />
      <Text
        justifyContent='flex-end'
        style={styles.styleTextInput}
        autoCapitalize="none">
        {pholder}
      </Text>
    { linked &&
      <TouchableOpacity style={{marginBottom: 10}} onPress={onPress}>
        <Image
        style={{marginBottom: 20, marginRight: 100, width: 25, height: 25, resizeMode: 'contain'}}
        source={require('../../images/arrow.png')}
        />
      </TouchableOpacity>
    }
     { !linked &&
      <TouchableOpacity style={{alignSelf: 'flex-end', justifyContent: 'flex-end', marginBottom: 10}} onPress={onPress}>
        <Image
        style={{marginBottom: 20, marginRight: 25, width: 25, height: 25, resizeMode: 'contain', justifyContent: 'flex-end'}}
        />
      </TouchableOpacity>
    }
    </View>
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
