import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  styleTextInput: {
    borderRadius: 10,
    textAlign: 'left',
    justifyContent: 'center',
    fontSize: 22,
    color: '#333333',
    marginTop: 8,
    fontFamily: 'Circular Std',
  },
  viewStyle: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    // width: '100%',
    borderBottomColor: 'rgba(79, 79, 79, 0.4)',
    marginTop: 18,
  },
  image: {
    resizeMode: 'contain',
    justifyContent: 'flex-start',
    marginRight: 20,
    marginBottom: 10,
  },
  sub: {
    color: '#828282',
    fontFamily: 'Circular Std',
    marginTop: 4,
  },
  mainView: {
    marginBottom: '2%',
    width: '80%',
    height: '12%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
})
