import React from 'react'
import YouTube from 'react-native-youtube'
import {View, Text } from 'react-native'
import SchedModal from '../../components/SchedModal'
import Button from '../../components/Button'
import FlipToggle from 'react-native-flip-toggle-button'
import styles from './styles'

class MomentScreen extends React.Component {

  constructor(props) {
  super(props)

    this.state = {
      // video: this.props.navigation.state.params.vid,
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
            image = {require('../../images/yoga.png')}
            text = {this.state.text}
            varelement = {<YouTube
              videoId="cBPP_izKKSs"
              play={false}
              fullscreen={true}
              loop={false}

              onReady={e => this.setState({ isReady: true })}
              onChangeState={e => this.setState({ status: e.state })}
              onChangeQuality={e => this.setState({ quality: e.quality })}
              onError={e => this.setState({ error: e.error })}

              style={{ alignSelf: 'stretch', height: 142, width: 244 }}
            />}
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
