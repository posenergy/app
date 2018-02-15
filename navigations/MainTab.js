import React from 'react';
import { AppRegistry, StyleSheet, Image, Text, TextInput, View } from 'react-native';
import {TabNavigator, StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import { NavigationActions } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PackagesScreen from '../screens/PackagesScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import CheckinScreen from '../screens/CheckinScreen';
import MessagesScreen from '../screens/MessagesScreen';

import Button from '../components/Button';
import '../components/DrawerIcons/packages.png';
import '../components/DrawerIcons/feedback.png';
import '../components/DrawerIcons/checkin.png';
import '../components/DrawerIcons/messages.png';


const MainTabNavigator = TabNavigator({
  Packages: {
    screen: PackagesScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Packages',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../components/DrawerIcons/packages.png')}
      />
    ),
  })
},
  Register: {
    screen: RegisterScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Register',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../components/DrawerIcons/checkin.png')}
      />
    ),
  })
},
  Feedback: {
    screen: FeedbackScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Feedback',
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../components/DrawerIcons/feedback.png')}
        />
      ),
    })
  },
  Checkin: {
    screen: CheckinScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Check In',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../components/DrawerIcons/checkin.png')}
        />
      ),
    })
  },
  Messages: {
    screen: MessagesScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Messages',
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../components/DrawerIcons/messages.png')}
        />
      ),
    })
  },
},

{
  headerMode: 'screen'
});

export default MainTabNavigator;
