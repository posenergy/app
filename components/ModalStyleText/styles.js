import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  viewStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(51, 51, 51, 0.4)',
    width: 300,
    height: 25,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginTop: 8,
  },
  styleTextInput: {
    borderRadius: 10,
    textAlign: 'left',
    backgroundColor: 'rgba(0,0,0,0.00001)', // 40% opaque
    fontSize: 22,
    color: '#F2F2F2',
    marginBottom: 11,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Circular Std',
    color: 'black',
    marginBottom: 11,
    textAlign: 'left',
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.00001)', // 40% opaque
  },

})
