import React from 'react'
import { StackNavigator } from 'react-navigation' // 1.0.0-beta.14

import CalendarScreen from '../screens/CalendarScreen'
import ChooseScreen from '../screens/ChooseScreen'
import SearchScreen from '../screens/SearchScreen'
import MomentScreen from '../screens/MomentScreen'
import SelectScreen from '../screens/SelectScreen'

import { HeaderBackButton } from 'react-navigation'

const CalendarStack = StackNavigator({
  Calendar: {
    screen: CalendarScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Calendar',
    }),
  },
  Choose: {
    screen: ChooseScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Choose',
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
    }),
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Search',
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
    }),
  },
  Moment: {
    screen: MomentScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Moment',
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
    }),
  },
  Select: {
    screen: SelectScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Schedule',
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
    }),
  },
},
{ initialRouteName: 'Calendar',
headerMode: 'none' }
)

export default CalendarStack
