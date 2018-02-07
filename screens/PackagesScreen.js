import React from 'react';
import { View, Text, Button } from 'react-native';

class PackagesScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Packages`
    // headerLeft: <Button
				//   onPress={() => navigate('DrawerOpen')}
				//   navigation={navigation}
				//   title="Learn More"
				//   color="#841584"
				//   accessibilityLabel="Learn more about this purple button"
				// />
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>View your Packages</Text>
      </View>

    );
  }
}

export default PackagesScreen