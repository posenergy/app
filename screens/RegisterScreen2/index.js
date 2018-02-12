import React from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';

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
      actions: [ NavigationActions.navigate({ routeName: 'MainDrawer'}) ],
    })
    this.props.navigation.dispatch(navigateAction);
  };

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
		  <Button type="login" onClick={() => this.resetNavigation('MainDrawer')}
          text="Sign Up" textColor="white"/>
      </ScrollView>
    )
  };

}

