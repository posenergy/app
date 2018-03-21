import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  innerContainer: {
    alignItems: 'center',
    width: 292,
    height: 420,
    backgroundColor: 'white',
    borderRadius: 11,
    flexDirection: 'column',
  },
  image: {
    height: 48,
    width: 48,
    marginTop: 28,
    marginBottom: 8,
  },
  title: {
    fontStyle: 'italic',
    fontSize: 26,
    textAlign: 'center',
    lineHeight: 31,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 23,
    height: 76,
    width: 282,
    marginTop: 15,
    marginBottom: 0,
  },
  bold: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 25,
  },
  var: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  contentWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
})
