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
    textAlign: 'center',
    textAlignVertical:'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
  },
  bold: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 25,
    width: '90%',
  },
  italics: {
    fontSize: 21,
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 25,
  },
  var: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  var2: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  contentWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
})
