import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { TabNavigator, TabBarBottom } from 'react-navigation' // 1.0.0-beta.14

import { resetNavigation } from '../screens/LoginScreen'
import ActivitiesStack from './ActivitiesStack'
import CalendarScreen from '../screens/CalendarScreen'
import ProfileScreen from '../screens/ProfileScreen'

import '../components/TabIcons/packages.png'
import '../components/TabIcons/feedback.png'
import '../components/TabIcons/checkin.png'
import '../components/TabIcons/messages.png'
// resetNavigation(targetRoute) {
//   const navigateAction = NavigationActions.reset({
//     index: 0,
//     actions: [ NavigationActions.navigate({ routeName: targetRoute}) ],
//   })
//   this.props.navigation.dispatch(navigateAction)
// }
const MainTabNavigator = TabNavigator({
  Activities: {
    screen: ActivitiesStack,
    navigationOptions: ({ navigation }) => ({
      title: 'Browse Activities',
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../components/TabIcons/activitiesMan.png')}
        />
      ),
    headerRight: <TouchableOpacity activeOpacity = { 0.5 } padding={200}>
      <Image source={require('../images/info.png')}/>
    </TouchableOpacity>,
    headerStyle: { backgroundColor: '#545680', borderWidth: 1 },
    headerTintColor: 'white',
    }),
  },
  Calendar: {
    screen: CalendarScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Calendar',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../components/TabIcons/calendar.png')}
      />
    ),
    headerRight: <TouchableOpacity activeOpacity = { 0.5 } padding={200}>
      <Image source={require('../images/info.png')}/>
    </TouchableOpacity>,
    headerStyle: { backgroundColor: '#545680', borderWidth: 1},
    headerTintColor: 'white',
    }),
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
    tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../components/TabIcons/profile.png')}
        />
      ),
    headerRight: <TouchableOpacity activeOpacity = { 0.5 } padding={200}>
      <Image source={require('../images/info.png')}/>
    </TouchableOpacity>,
    headerStyle: { backgroundColor: '#545680', borderWidth: 1},
    headerTintColor: 'white',
    }),
  },
},

{
  headerMode: 'screen',
  // navigationOptions: ({ navigation }) => ({
  //   tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
  //     const { route, focused, index } = scene;
  //     if (!focused) {
  //       if (route.index > 0) {
  //         const tabRoute = route.routeName;
  //         const { routeName, key } = route.routes[0];
  //         navigation.dispatch(
  //           NavigationActions.navigate({ routeName: tabRoute })
  //         )
  //         navigation.dispatch(
  //           NavigationActions.reset({
  //             index: 0,
  //             key,
  //             actions: [
  //               NavigationActions.navigate({ routeName })
  //             ]
  //           })
  //         )
  //       } else {
  //         jumpToIndex(index);
  //       }
  //     }
  //   },
  // })
})

export default MainTabNavigator
