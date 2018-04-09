import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  view: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    height: '100%',
    width: 240,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginTop: '7%',
  },
  text: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    textAlign: 'left',
    marginBottom: '7%',
    marginLeft: '10%',
    fontSize: 18,
    lineHeight: 21,
    color: '#333333',
    fontFamily: 'Circular Std',
  },
  textview: {
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    alignItems: 'center',
     justifyContent: 'center',
   },
})
