import React from 'react'
import { View } from 'react-native'
import Thumbnail from 'react-native-thumbnail-video'
import SchedModal from './../components/SchedModal'
import Button from './../components/Button'

class MomentScreen extends React.Component {
  
  constructor(props) {
  super(props)

    this.state = {
      title: this.props.navigation.state.params.title,
      pict: this.props.navigation.state.params.pict,
      text: this.props.navigation.state.params.desc,
    }
  }

  render() {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SchedModal
          title = {this.state.title}
          image = {require('./../images/yoga.png')}
          text = {this.state.text}
          varelement = {<Thumbnail
                          url="https://www.youtube.com/watch?v=cBPP_izKKSs"
                          imageWidth={244}
                          imageHeight={142} />}
        />
        <Button type='schedule'
        onClick={() => {
          const { navigate } = this.props.navigation
          navigate('Schedule', {
            title: this.state.title,
            pict: this.state.pict,
            desc: this.state.text,
          })
        }}
        text='Schedule' textColor='white'/>
    </View>
	)
  }
}

export default MomentScreen
