import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

class OverlayScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false,
    }
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
          <Image source={require('./../images/plus.png')}
            alignSelf = 'flex-end'
            marginBottom = '4%'
            marginRight = '2%'/>
        </TouchableOpacity>
      </View>
    )
  }
}

export default OverlayScreen
