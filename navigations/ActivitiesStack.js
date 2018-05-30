import React from 'react'
import { StackNavigator } from 'react-navigation' // 1.0.0-beta.14

import ChooseScreen from '../screens/ChooseScreen'
import SearchScreen from '../screens/SearchScreen'
import MomentScreen from '../screens/MomentScreen'
import ScheduleScreen from '../screens/ScheduleScreen'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'

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
  transitionConfig: () => ({
    screenInterpolator: (sceneProps) => {
      // Disable the transition animation when resetting to the home screen.
      if (
        sceneProps.index === 0 &&
        sceneProps.scene.route.routeName !== 'Choose' &&
        sceneProps.scenes.length > 2
      ) return null

      // Otherwise, use the usual horizontal animation.
      return CardStackStyleInterpolator.forHorizontal(sceneProps)
    },
  }),
}
)

export default ActivitiesStack
