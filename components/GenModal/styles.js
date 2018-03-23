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
	},
	image: {
    height: 74,
    width: 74,
    marginTop: 19,
		marginBottom: 7,
  },
  place: {
    height: 8,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  title: {
    fontStyle: 'italic',
    fontSize: 26,
    textAlign: 'center',
    lineHeight: 31,
  },
  text: {
    fontSize: 21,
    textAlign: 'center',
    lineHeight: 25,
    width: 276,
    marginTop: 25,
    marginBottom: 15,
  },
  bold: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 20,
  },
  contentWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
})


