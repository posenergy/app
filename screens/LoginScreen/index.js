import React from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';

import config from '../../config/config';
import styles from './styles';

import AppNavigator from '../../navigations/AppNavigator';
import StyleTextInput from '../../components/StyleTextInput';
import Button from '../../components/Button';
//import NewUser from '../../components/NewUser';
import ForgotPassword from '../../components/ForgotPassword';

export default class LoginScreen extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  resetNavigation(targetRoute) {
    const navigateAction = NavigationActions.reset({
      index: 0,
      actions: [ NavigationActions.navigate({ routeName: 'MainDrawer'}) ],
    })
    this.props.navigation.dispatch(navigateAction);
  };
  
  async getUser(email, password) {
    this.props.loading();
    try {
      let responseJSON;
      let apiUrl = `${config.apiUrl}/users?email=${email}&password=${password}`;
      let response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      // if the user is already in the database, we just get the user and put it in the store
      if (!response.ok) {
        this.onFail();
        return false;
      }
      else {
        responseJSON = await response.json();
      }
      return responseJSON;
    } catch(error) {
      console.error(error);
    }
  }

  async loginUser(email, password) {
    try {
      let responseJSON;
      let apiUrl = `${config.apiUrl}/auth/login`;
      let response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          'email': {email},
          'password': {password},
        })
      });
      // if the user is already in the database, we just get the user and put it in the store
      if (!response.ok) {
        console.log(this.state.email);
        console.log(this.state.password);
        console.log("TRYINGAGAIN");
        return false;
      }
      else {
        this.resetNavigation("MainDrawer");
        responseJSON = await response.json();

      }
      
      return responseJSON;
    } catch(error) {
      console.error(error);
    }
  }

  async getActiveRecent(){
    try {
      let response = await fetch(config.apiUrl + '/users', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        let responseJSON = await response.json()
        console.log(response);
      }
    } catch(error) {
      console.error(error);
    }
  }

  // <Button 
  //   type="SignUp" onClick={() => this.resetNavigation('SignUp')}
  //   text="Sign Up" textColor="white"
  // />
  // <Button 
  //   type="ForgotPassword" onClick={() => this.resetNavigation('ForgotPassword')}
  //   text="Forgot Password?" textColor="white"
  // />

  // TODO LOGIN FUNCTIONALITY loginUser(this.state.email, this.state.password)

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <StyleTextInput pholder="Email" 
        changeFunction={email => this.setState({email})}/>
        <StyleTextInput pholder="Password" 
        changeFunction={password => this.setState({password})}
        passwordSecure={true}/>
  	    <Button 
          type="login" onClick={() => this.loginUser(this.state.email, this.state.password)}
          text="Login" textColor="white"/>
      </View>
    )
  };
}
