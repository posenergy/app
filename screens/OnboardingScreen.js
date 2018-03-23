import React from 'react'
import { View } from 'react-native'
import GenModal from '../components/GenModal'

class OnboardingScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  render() {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <GenModal
      title = "Welcome!"
      text = "[+energy] helps you discover wellness content and integrate it into your busy life by instantly adding chosen events to your calendar, and continually syncing with it."
      bname = "Let's go!"
      bold = "Ready to get planning?"
      />
    </View>
  )
  }
}

export default OnboardingScreen
