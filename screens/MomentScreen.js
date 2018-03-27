import React from 'react'
import { StyleSheet, View } from 'react-native'
import Thumbnail from 'react-native-thumbnail-video'
import SchedModal from './../components/SchedModal'
import Button from './../components/Button'
import { CheckBox } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
})

class MomentScreen extends React.Component {
  
  constructor(props) {
  super(props)

    this.state = {
      title: this.props.navigation.state.params.title,
      pict: this.props.navigation.state.params.pict,
      text: this.props.navigation.state.params.desc,
      check: true,
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
            varelement2 = {<CheckBox
              title='Include my buffer time in results.'
              checked ={this.state.check}
              checkedColor= 'black'
              containerStyle= {styles.container}
              onPress={() => this.setState({check: !this.state.check})}/>}
            button = {<Button type='schedule'
              onClick={() => {
                const { navigate } = this.props.navigation
                navigate('Schedule', {
                  title: this.state.title,
                  pict: this.state.pict,
                  desc: this.state.text,
                })
              }}
              text='Schedule' textColor='white'/>}
          />
      </View>
    )
  }

}

export default MomentScreen
