import React from 'react'
import { StackNavigator } from 'react-navigation' // 1.0.0-beta.14

import CalendarScreen from '../screens/CalendarScreen'
import ChooseScreen from '../screens/ChooseScreen'
import SearchScreen from '../screens/SearchScreen'
import MomentScreen from '../screens/MomentScreen'
import MomentInfoScreen from '../screens/MomentInfoScreen'
import SelectScreen from '../screens/SelectScreen'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'

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
      headerLeft: <HeaderBackButton tintColor='white' onPress={() => navigation.goBack(null)} />,
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
  Select: {
    screen: SelectScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Schedule',
      headerLeft: <HeaderBackButton tintColor='white' onPress={() => navigation.goBack(null)} />,
    }),
  },
  MomentInfo: {
    screen: MomentInfoScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'MomentInfo',
      headerLeft: <HeaderBackButton tintColor='white' onPress={() => navigation.goBack(null)} />,
    }),
  },
},
{ initialRouteName: 'Calendar',
headerMode: 'none',
initialRouteKey: 'Calendar',
transitionConfig: () => ({
  screenInterpolator: (sceneProps) => {
    // Disable the transition animation when resetting to the home screen.
    if (
      sceneProps.index === 0 &&
      sceneProps.scene.route.routeName !== 'Calendar' &&
      sceneProps.scenes.length > 2
    ) return null

    // Otherwise, use the usual horizontal animation.
    return CardStackStyleInterpolator.forHorizontal(sceneProps)
  },
}),
}
)

export default CalendarStack
