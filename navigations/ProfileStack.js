import React from 'react'
import { StackNavigator } from 'react-navigation' // 1.0.0-beta.14

import ProfileScreen from '../screens/ProfileScreen'
import EditProfileScreen from '../screens/EditProfileScreen'

import { HeaderBackButton } from 'react-navigation'

const ProfileStack = StackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
    }),
  },
  EditProfile: {
    screen: EditProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit Preferences',
      headerLeft: <HeaderBackButton tintColor='white' onPress={() => navigation.goBack(null)} />,
    }),
  },
},
{ initialRouteName: 'Profile',
headerMode: 'none',
}
)

export default ProfileStack
