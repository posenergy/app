import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

const BlackStyleTextInput = ({pholder, sub, onPress, linked, imagelink }) => (
  <View marginTop= '4%' marginBottom={10} width={310} height='13%' alignSelf='center' justifyContent='center' >
    <View
    justifyContent='flex-start'
    style = {styles.viewStyle}>
      <Image
        source={imagelink}
        alignSelf = 'center'
        style = {styles.image}
      />
      <View width={150}>
        <Text style={styles.sub}>
        {sub}
        </Text>
      <Text
        justifyContent='flex-end'
        style={styles.styleTextInput}
        autoCapitalize="none">
        {pholder}
      </Text>
      </View>
    { linked &&
      <TouchableOpacity style={{marginBottom: 10}} onPress={onPress}>
        <Image
        style={{marginTop: 10, marginLeft: 70, width: 25, height: 25, resizeMode: 'contain', justifyContent: 'flex-end', alignSelf: 'flex-end'}}
        source={require('../../images/arrow.png')}
        />
      </TouchableOpacity>
    }
     { !linked &&
      <TouchableOpacity style={{alignSelf: 'flex-end', justifyContent: 'flex-end', marginBottom: 10}} onPress={onPress}>
        <Image
        style={{marginRight: 25, width: 25, height: 25, resizeMode: 'contain', justifyContent: 'flex-end'}}
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
