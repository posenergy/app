import React from 'react'
import { StackNavigator } from 'react-navigation' // 1.0.0-beta.14

import ChooseScreen from '../screens/ChooseScreen'
import SearchScreen from '../screens/SearchScreen'
import MomentScreen from '../screens/MomentScreen'
import ScheduleScreen from '../screens/ScheduleScreen'

import { HeaderBackButton } from 'react-navigation'

const ActivitiesStack = StackNavigator({
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
      headerLeft: <HeaderBackButton tintColor='white' onPress={() => navigation.goBack(null)} />,
    }),
  },
  Moment: {
    screen: MomentScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Moment',
      headerLeft: <HeaderBackButton tintColor='white' onPress={() => navigation.goBack(null)} />,
    }),
  },
  Schedule: {
    screen: ScheduleScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Schedule',
      headerLeft: <HeaderBackButton tintColor='white' onPress={() => navigation.goBack(null)} />,
    }),
  },
},
{
  initialRouteName: 'Choose',
  headerMode: 'none',
}
)

export default ActivitiesStack
