import React from 'react';
import { AppRegistry, StyleSheet, Image, Text, TextInput, View } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
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

const MainDrawerNavigator = DrawerNavigator({
  Packages: {
    screen: PackagesScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Packages',
      headerLeft: <Button onClick={() => navigation.navigate('DrawerOpen')} text="&#9776;" type="menu" textColor="black" />,
      drawerLabel: 'Packages',
      drawerIcon: ({ tintColor }) => (
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
      headerLeft: <Button onClick={() => navigation.navigate('DrawerOpen')} text="&#9776;" type="menu" textColor="black" />,
      drawerLabel: 'Register',
      drawerIcon: ({ tintColor }) => (
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
      headerLeft: <Button onClick={() => navigation.navigate('DrawerOpen')} text="&#9776;" type="menu" textColor="black" />,
      drawerLabel: 'Feedback',
      drawerIcon: ({ tintColor }) => (
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
      headerLeft: <Button onClick={() => navigation.navigate('DrawerOpen')} text="&#9776;" type="menu" textColor="black" />,
      drawerLabel: 'Check In',
      drawerIcon: ({ tintColor }) => (
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
      headerLeft: <Button onClick={() => navigation.navigate('DrawerOpen')} text="&#9776;" type="menu" textColor="black" />,
      drawerLabel: 'Messages',
      drawerIcon: ({ tintColor }) => (
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

export default MainDrawerNavigator;
