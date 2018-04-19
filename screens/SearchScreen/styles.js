import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  Container: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },
  viewStyle: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  viewStyles: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    width: 400,
    height: 400,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'column',
  },
  flatList: {
    marginBottom: 60,
  },
  pict: {
    height: 45,
    width: 45,
  },
  buttonStyle: {
    justifyContent: 'flex-end',
  },
  activities: {
    alignSelf: 'center',
    marginBottom: 10,
    position: 'absolute',
    bottom: 0,
    zIndex: 4,
  },
  empty: {
    fontFamily: 'CircularStd-Book',
    alignSelf: 'center',
  },
})
