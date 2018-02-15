import React from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import { NavigationActions } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MainTabNavigator from './MainTab';

import Button from '../components/Button';

const AppNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
  MainTab: {
    screen: MainTabNavigator,
  },
});

export default AppNavigator;
