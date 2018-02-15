import React from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';

import config from '../../config/config';
import styles from './styles';

import AppNavigator from '../../navigations/AppNavigator';
import StyleTextInput from '../../components/StyleTextInput';
import Button from '../../components/Button';

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
      actions: [ NavigationActions.navigate({ routeName: 'MainTab'}) ],
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

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
<<<<<<< HEAD
        <LoginFields />
		    <Button type="login" onClick={() => this.resetNavigation('MainTab')}
=======
        <StyleTextInput pholder="Email" changeFunction={email => this.setState({email})}/>
        <StyleTextInput pholder="Password" changeFunction={password => this.setState({password})}/>
  	    <Button 
          type="login" onClick={() => this.resetNavigation('MainDrawer')}
>>>>>>> a752cec290e289fc7eea37d3632d3744b4c9d11b
          text="Login" textColor="white"
        />
      </View>
    )
  };
}

