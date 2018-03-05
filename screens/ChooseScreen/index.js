import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { NavigationActions } from 'react-navigation'

import config from '../../config/config'
import styles from './styles'

export default class SearchScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Choose',
  })

  render() {
  	return(
  		<View style={styles.viewStyle}>

	  		<TouchableOpacity style={styles.button} 
	  		  onPress={(event) => {
  		  	const { navigate } = this.props.navigation;
  		  	navigate('Search', {category: "Movement"});
	  			}}>
	  			<Image source={require('./src/mvmt.png')}/>
	  		</TouchableOpacity>

	  		<TouchableOpacity style={styles.button} 
  				onPress={(event) => {
  		  	const { navigate } = this.props.navigation;
  		  	navigate('Search', {category: "Mindfulness"});
	  			}}>
	  			<Image source={require('./src/mind.png')}/>
	  		</TouchableOpacity>

  		</View>

  	)
  }
}