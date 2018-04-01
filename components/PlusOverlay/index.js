import React, { Component} from 'react'
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native'


export default class PlusOverlay extends Component {

render() {
    return (
        <TouchableOpacity
          style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
          <Image source={require('../../images/plus.png')}
            alignSelf = 'flex-end'
            marginBottom = '4%'
            marginRight = '3%'/>
        </TouchableOpacity>
    )
  }
}
