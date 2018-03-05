import { StackNavigator } from 'react-navigation' // 1.0.0-beta.14

import ChooseScreen from '../screens/ChooseScreen'
import SearchScreen from '../screens/SearchScreen'

const ActivitiesStack = StackNavigator({
  Choose: {
    screen: ChooseScreen,
  },
  Search: {
    screen: SearchScreen,
  },
},
{ headerMode: 'none' }
)

export default ActivitiesStack
