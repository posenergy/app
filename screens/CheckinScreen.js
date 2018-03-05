import React from 'react'
import { View, Text } from 'react-native'

class PackagesScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: 'Packages',
  })
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>View your Packages</Text>
      </View>

    )
  }
}

export default PackagesScreen
