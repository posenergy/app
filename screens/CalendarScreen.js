import React from 'react'
import { StyleSheet, View } from 'react-native'
import GenModal from '../components/GenModal'
import Thumbnail from 'react-native-thumbnail-video'
import SchedModal from './../components/SchedModal'
import Button from './../components/Button'
import { CheckBox } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    marginBottom: '10%',
  },
});

class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  constructor(props) {
    super(props)

    this.state = {
      check: true,
    }
  }

  render() {
    return(
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SchedModal
          title = "Detox Yoga"
          image = {require('./../images/yoga.png')}
          text = "30 minute yoga filled with detoxifying twists"
          varelement = {<Thumbnail
                          url="https://www.youtube.com/watch?v=cBPP_izKKSs"
                          imageWidth={244}
                          imageHeight={142} />}
          varelement2 = {<CheckBox
            title='Include my buffer time in results.'
            checked ={this.state.check}
            checkedColor= 'black'
            containerStyle= {styles.container}
            onPress={() => this.setState({check: !this.state.check})}
          />}
          buttontext = "Schedule"
        />

    </View>
	)
  }
}

export default CalendarScreen
