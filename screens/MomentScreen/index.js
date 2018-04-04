import React from 'react'
import {View, Text } from 'react-native'
import Thumbnail from 'react-native-thumbnail-video'
import SchedModal from './../components/SchedModal'
import Button from './../components/Button'
import FlipToggle from 'react-native-flip-toggle-button'
import styles from './styles'


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
      <View style={styles.view}>
        <SchedModal
            title = {this.state.title}
            brand ={this.state.brand}
            image = {require('./../images/yoga.png')}
            text = {this.state.text}
            varelement = {<Thumbnail
              url="https://www.youtube.com/watch?v=cBPP_izKKSs"
              imageWidth={244}
              imageHeight={142} />}
              varelement2 = {
                <View style={styles.toggle}>
                  <FlipToggle
                    value={this.state.check}
                    buttonWidth={34}
                    buttonHeight={21}
                    buttonRadius={50}
                    buttonOffColor={'#E5E5E5'}
                    sliderOffColor={'white'}
                    buttonOnColor={'#545680'}
                    sliderOnColor={'#E5E5E5'}
                    onToggle={() => this.setState({check: !this.state.check})}
                  />
                  <Text style={styles.toggleText}>
                  Include my recovery time in results.
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
