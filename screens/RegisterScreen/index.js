import React from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';

import config from '../../config/config';
import styles from './styles';

import AppNavigator from '../../navigations/AppNavigator';
import RegisterFields from '../../components/RegisterFields';
import Button from '../../components/Button';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      readytime: '',
    };
  }

  resetNavigation(targetRoute) {
    const navigateAction = NavigationActions.reset({
      index: 0,
      actions: [ NavigationActions.navigate({ routeName: 'MainDrawer'}) ],
    })
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <RegisterFields/>
		    <Button type="login" onClick={() => this.resetNavigation('MainDrawer')}
          text="Sign Up" textColor="white"/>
      </ScrollView>
    )
  };

}

