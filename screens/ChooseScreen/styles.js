import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 350
const guidelineBaseHeight = 680

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
    resizeMode: 'cover',
    // alignSelf: 'stretch',
    width: moderateScale(500),
    height: verticalScale(680) * 0.445,
  },
  mindPad: {
    width: moderateScale(500),
    height: verticalScale(680) * 0.445,
  },
})
