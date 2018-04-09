import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  innerContainer: {
    alignItems: 'center',
    width: 292,
    height: 480,
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
    textAlignVertical: 'center',
    lineHeight: 31,
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '4%',
    marginBottom: '3%',
    color: '#4F4F4F',
  },
  textview: {
    marginBottom: '2%',
    height: '14%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 25,
    width: '90%',
    marginBottom: '2%',
  },
  italics: {
    fontSize: 19,
    fontStyle: 'italic',
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 22,
    color: '#4F4F4F',
  },
  var: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  var2: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '7.5%',
    marginBottom: '7.5%',
  },
  contentWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
})
