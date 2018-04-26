import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  styleTextInput: {
    borderRadius: 10,
    textAlign: 'left',
    justifyContent: 'center',
    fontSize: 22,
    width: 240,
    color: '#333333',
    marginTop: 8,
    fontFamily: 'Circular Std',
  },
  viewStyle: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    width: '100%',
    borderBottomColor: 'rgba(79, 79, 79, 0.4)',
  },
  image: {
    resizeMode: 'contain',
    justifyContent: 'flex-start',
    marginRight: 20,
    marginBottom: 10,
    height: 40,
    width: 37,
  },
  sub: {
    color: '#828282',
    fontFamily: 'Circular Std',
    marginTop: 4,
    marginLeft: 55,
  },
  mainView: {
    width: '80%',
    height: '5%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
})
