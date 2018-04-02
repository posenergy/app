import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Thumbnail from 'react-native-thumbnail-video'
import SchedModal from './../components/SchedModal'
import Button from './../components/Button'
import { CheckBox } from 'react-native-elements'
import FlipToggle from 'react-native-flip-toggle-button'

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
      brand: this.props.navigation.state.params.brand,
      check: true,
    }
  }

  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SchedModal
            title = {this.state.title}
            brand = {this.state.brand}
            image = {require('./../images/yoga.png')}
            text = {this.state.text}
            varelement = {<Thumbnail
              url="https://www.youtube.com/watch?v=cBPP_izKKSs"
              imageWidth={244}
              imageHeight={142} />}
              varelement2 = {
                <View flexDirection = 'row' justifyContent = 'space-between'>
                  <FlipToggle
                    value={this.state.check}
                    buttonWidth={50}
                    buttonHeight={25}
                    buttonRadius={50}
                    buttonOffColor={'#E5E5E5'}
                    sliderOffColor={'white'}
                    buttonOnColor={'#545680'}
                    sliderOnColor={'#E5E5E5'}
                    onToggle={() => this.setState({check: !this.state.check})}
                  />
                  <Text textAlignVertical='center'>
                  Include my buffer time in results.
                  </Text>
                </View>
              }
            button = {<Button type='schedule'
              justifyContent= 'flex-end'
              onClick={() => {
                const { navigate } = this.props.navigation
                navigate('Schedule', {
                  title: this.state.title,
                  pict: this.state.pict,
                  desc: this.state.text,
                  brand: this.state.brand,
                })
              }}
              text='Schedule' textColor='white'/>}
          />
      </View>
    )
  }

}

export default MomentScreen
