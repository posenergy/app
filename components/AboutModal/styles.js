import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'column',
  },
  innerContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 300,
    height: 454,
    backgroundColor: 'white',
    borderRadius: 11,
    flexDirection: 'column',
  },
  scroll: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  textUnderline: {
    fontSize: 16,
    color: 'black',
    marginBottom: 11,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    marginTop: 25,
    textAlign: 'left',
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.00001)', // 40% opaque
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 19,
    width: 276,
    marginTop: 14,
    marginBottom: 14,
  },
  bold: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 40,
  },

})
