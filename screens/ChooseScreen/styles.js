import { StyleSheet, Dimensions } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'

//const Device = require('react-native-device')
const { width, height } = Dimensions.get('window')

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350
const guidelineBaseHeight = 680

const scale = size => width / guidelineBaseWidth * size
const verticalScale = size => height / guidelineBaseHeight * size
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor

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
    width: width,
    height: height * 0.42,
  },
  mind: {
    width: width,
    height: height * 0.42,
  },
  mvmtPad: {
    paddingTop: moderateScale(100),
    width: moderateScale(500),
    height: verticalScale(680) * 0.42,
  },
  mindPad: {

    width: moderateScale(500),
    height: verticalScale(680) * 0.42,
  },
})

    // box: {
    //     width: moderateScale(300),
    //     height: verticalScale(450),
    //     padding: scale(10),
    //     ...
    // },
    // title: {
    //     fontSize: moderateScale(20, 0.4),
    //     marginBottom: scale(10),
    //     ...
    // },
    // text: {
    //     fontSize: moderateScale(14),
    //     ...
    // },
    // button: {
    //     width: moderateScale(150, 0.3),
    //     height: moderateScale(45, 0.3),
    //     marginBottom: moderateScale(10),
    //     ...
    // },
