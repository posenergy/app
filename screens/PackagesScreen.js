import React from 'react'
import { View } from 'react-native'
import GenModal from './../components/GenModal'

class PackagesScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: 'Packages',
  })
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    return (
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

export default PackagesScreen
