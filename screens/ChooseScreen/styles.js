import { StyleSheet, Dimensions } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
  },
  modalIndex: {
    height: 8,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  mvmtTouch: {
    borderBottomColor: 'white',
    borderBottomWidth: 5,
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
