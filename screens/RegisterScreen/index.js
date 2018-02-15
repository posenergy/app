import React from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, ScrollView, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';

import config from '../../config/config';
import styles from './styles';

import AppNavigator from '../../navigations/AppNavigator';
import RegisterFields from '../../components/RegisterFields';
import StyleTextInput from '../../components/StyleTextInput';
import Button from '../../components/Button';

export default class RegisterScreen2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
      gender: '',
    };
  }

resetNavigation(targetRoute) {
  const navigateAction = NavigationActions.reset({
    index: 0,
    actions: [ NavigationActions.navigate({ routeName: 'MainTab'}) ],
  })
  this.props.navigation.dispatch(navigateAction);
 };

async writeUser(name, email, password, confirmpassword, gender){
  if (password == confirmpassword){
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
    try {
      let responseJSON;
      let apiUrl = `${config.apiUrl}/users`;
      let response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          hash: password,
          gender: gender,
        }),
      });
      if (!response.ok) {
        return false;
      }
      // should not return the error message if correctly writes into the database
     // else {
       // responseJSON = await response.json();
        this.resetNavigation('MainTab');
     // }
      return responseJSON;
    } catch(error) {
      console.error(error);
    }
  }
}


  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.viewcontainer}>
      <StyleTextInput
        pholder="Name"
        passwordSecure = {false}
        changeFunction ={name => this.setState({name})}
      />
      <StyleTextInput
        pholder="Email"
        passwordSecure = {false}
        changeFunction ={email => this.setState({email})}
      />
      <StyleTextInput
        pholder="Password"
        passwordSecure = {true}
        changeFunction = {password => this.setState({password})}
      />
      <StyleTextInput
        pholder="Confirm Password"
        passwordSecure = {true}
        changeFunction ={confirmpassword => this.setState({confirmpassword})}
      />
      <StyleTextInput
        pholder="Gender"
        passwordSecure= {false}
        changeFunction ={gender => this.setState({gender})}
      />
		  <Button type="login" color = "#203359" style ={styles.button} onClick={() => this.writeUser(this.state.name, this.state.email, this.state.password, this.state.confirmpassword, this.state.gender)}
          text="Sign Up" textColor="white"/>
      </ScrollView>
    )
  };

}

