import React from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, ScrollView, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';

import config from '../../config/config';
import styles from './styles';

import AppNavigator from '../../navigations/AppNavigator';
import RegisterFields from '../../components/RegisterFields';
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
  //if (password == confirmpassword){
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
 // }
  // else{
  // }

}


  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.viewcontainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        onChangeText ={name => this.setState({name})}
      />
      <TextInput style={styles.textInput}
        placeholder="Email"
        autoCapitalize = "none"
        onChangeText ={email => this.setState({email})}
      />
      <TextInput style={styles.textInput}
        secureTextEntry = {true}
        placeholder="Password"
        autoCapitalize = "none"
        onChangeText = {password => this.setState({password})}
      />
      <TextInput style={styles.textInput}
        secureTextEntry = {true}
        placeholder="Confirm Password"
        autoCapitalize = "none"
        onChangeText ={confirmpassword => this.setState({confirmpassword})}
      />
      <TextInput style={styles.textInput}
        placeholder="Gender"
        onChangeText ={gender => this.setState({gender})}
      />
		  <Button type="login" color = "#203359" style ={styles.button} onClick={() => this.writeUser(this.name, this.email, this.password, this.confirmpassword, this.gender)}
          text="Sign Up" textColor="white"/>
      </ScrollView>
    )
  };

}

