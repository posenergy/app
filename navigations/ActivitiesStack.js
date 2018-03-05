import { StackNavigator } from 'react-navigation' // 1.0.0-beta.14

import ChooseScreen from '../screens/ChooseScreen'
import SearchScreen from '../screens/SearchScreen'

const ActivitiesStack = StackNavigator({
  ChooseScreen: {
    screen: ChooseScreen,
  },
  Search: {
    screen: SearchScreen,
  },
})

export default ActivitiesStack
