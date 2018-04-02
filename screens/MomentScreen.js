import React from 'react'
import YouTube from 'react-native-youtube'
import { StyleSheet, View } from 'react-native'
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
      // video: this.props.navigation.state.params.vid,
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
