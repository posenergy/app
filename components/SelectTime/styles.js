import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  innerContainer: {
    alignItems: 'center',
    width: '80%',
    height: '85%',
    backgroundColor: 'white',
    borderRadius: 11,
    flexDirection: 'column',
  },
  image: {
    height: 48,
    width: 48,
    marginTop: '2%',
    marginBottom: 8,
  },
  title: {
    fontStyle: 'italic',
    fontSize: 23,
    textAlign: 'center',
    lineHeight: 31,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 23,
    width: '80%',
    marginTop: 15,
  },
  bold: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 25,
  },
  italics: {
    fontSize: 19,
    marginTop: '5%',
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 22,
    color: '#4F4F4F',
  },
  var: {
    marginBottom: '5%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
})
