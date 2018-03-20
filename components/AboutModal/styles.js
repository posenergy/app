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
  modalContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  innerContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 300,
    height: 492,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'column',
  },
  scroll: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 19,
    width: 276,
    marginTop: 14,
    marginBottom: 14,
  },
  image: {
    width: 12,
    height: 12,
    alignSelf: 'flex-end',
    marginTop: 15  ,
  },
  bold: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 40,
  },
  opacity: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },

})


