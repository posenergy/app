import React from 'react'
import { View } from 'react-native'
import Thumbnail from 'react-native-thumbnail-video'
import SchedModal from './../components/SchedModal'
import Button from './../components/Button'
import CheckBox from 'react-native-checkbox'

class MomentScreen extends React.Component {
  static navigationOptions = {
		title: 'Welcome',
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
        />
        <CheckBox
          label='Label'
          checked={true}
           onChange={(checked) => console.log('I am checked', checked)}
        />
        <Button type='schedule'
        onClick={() => this.props.navigation.navigate('Packages')}
        text='Add to Calendar' textColor='white'/>
    </View>
	)
  }
}

export default MomentScreen
