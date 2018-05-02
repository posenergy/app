import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	Container: {
		flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
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
    alignItems: 'center',
    width: 300,
    height: 454,
    backgroundColor: 'white',
    borderRadius: 11,
    flexDirection: 'column',
    shadowColor: '#4F4F4F',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {width: 1, height: 3},
	},
    image: {
    height: 74,
    width: 74,
    marginTop: 19,
		marginBottom: 7,
  },
  title: {
    fontStyle: 'italic',
    fontSize: 26,
    textAlign: 'center',
    lineHeight: 31,
    fontFamily: 'Circular Std',
  },
  text: {
    fontSize: 21,
    textAlign: 'center',
    lineHeight: 25,
    width: 250,
    marginTop: 15,
    fontFamily: 'Circular Std',
    height: 175,
  },
  bold: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 10,
    height: 30,
    marginTop: 10,
    fontFamily: 'Circular Std',
  },
  contentWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
})


