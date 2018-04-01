import React from 'react'
import { StackNavigator } from 'react-navigation' // 1.0.0-beta.14
import { Image, TouchableOpacity } from 'react-native'

import CalendarScreen from '../screens/CalendarScreen'
import PickerScreen from '../screens/PickerScreen'
import ChooseScreen from '../screens/ChooseScreen'
import SearchScreen from '../screens/SearchScreen'
import MomentScreen from '../screens/MomentScreen'

import { HeaderBackButton } from 'react-navigation'
const CalendarStack = StackNavigator({
  Calendar: {
    screen: CalendarScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Calendar',
    }),
  },
  Picker: {
    screen: PickerScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Picker',
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
    }),
  },
  Choose: {
    screen: ChooseScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Choose',
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
},
{ headerMode: 'none' }
)

export default CalendarStack
