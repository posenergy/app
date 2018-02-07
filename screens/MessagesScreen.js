import React from 'react';
import { View, Text } from 'react-native';

class MessagesScreen extends React.Component{
  static navigationOptions = {
    title: 'Welcome'
  };
  render(){
  	const { navigate } = this.props.navigation;
  	return(
	  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	    <Text>Messages Screen</Text>
	  </View>
	);
  }
}

export default MessagesScreen