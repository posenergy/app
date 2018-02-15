import React from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, ScrollView, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';
import ValidationComponent from 'react-native-form-validator';


import config from '../../config/config';
import styles from './styles';

import AppNavigator from '../../navigations/AppNavigator';
import RegisterFields from '../../components/RegisterFields';
import StyleTextInput from '../../components/StyleTextInput';
import Button from '../../components/Button';

export default class RegisterScreen2 extends ValidationComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
      gender: '',
    }
  }

  _onSubmit() {
  this.validate({
    name: {required: true},
    email: {required: true},
    gender: {required: true}
  });

  }

resetNavigation(targetRoute) {
  const navigateAction = NavigationActions.reset({
    index: 0,
    actions: [ NavigationActions.navigate({ routeName: 'MainTab'}) ],
  })
  this.props.navigation.dispatch(navigateAction);
 };

async writeUser(name, email, password, confirmpassword, gender){
  if (this.validPassword(password, confirmpassword) && this.validEmail(email)) {
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
      console.log(response)
      if (!response.ok) {
        return false;
      }
     else {
        responseJSON = await response.json();
        this.resetNavigation('MainTab');
      }
      return responseJSON;
    } catch(error) {
      console.error(error);
    }
  }
}

  validPassword(password, confirmpassword){
    if(password == confirmpassword){
      console.log("Passwords Match");
      return true;
    }
    else {
      console.log("Passwords do not Match");
      Alert.alert(
      'Cannot Register User',
      'Passwords do not match',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false })
      return false;
    }
  }

  validEmail(email){
    if (email !== '') {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(email) === false){
        console.log("Email is Not Correct");
        Alert.alert(
        'Cannot Register User',
        'Email is invalid.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false })
        return false;
      }
      else {
        return true
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

