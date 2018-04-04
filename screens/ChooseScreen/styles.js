import { StyleSheet, Dimensions } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'

const {height, width} = Dimensions.get('window')

export default StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
  },
  mvmt: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.42,
    ...ifIphoneX({
      height: Dimensions.get('window').height * 0.43,
    }),
  },
  mind: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.42,
    ...ifIphoneX({
      height: Dimensions.get('window').height * 0.43,
    }),
  },
})
