import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  styleTextInput: {
    borderRadius: 10,
    textAlign: 'left',
    justifyContent: 'center',
    fontSize: 22,
    flex: 3,
    color: '#333333',
    marginTop: 8,
    fontFamily: 'Circular Std',
  },
  viewStyle: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(79, 79, 79, 0.4)',
    width: 300,
    height: 50,
    justifyContent: 'center',
    marginTop: 18,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  sub: {
    color: '#828282',
    fontFamily: 'Circular Std',
    marginTop: 4,
  },
})
