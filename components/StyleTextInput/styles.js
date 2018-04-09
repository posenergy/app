import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#F2F2F2',
    width: 300,
    height: 50,
    justifyContent: 'center',
    marginTop: 18,
    marginBottom: 21,
  },
  styleTextInput: {
    borderRadius: 10,
    textAlign: 'left',
    backgroundColor: 'rgba(0,0,0,0.00001)', // 40% opaque
    fontSize: 22,
    flex: 3,
    color: '#F2F2F2',
    marginBottom: 11,
    fontFamily: 'Circular Std',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },

})
