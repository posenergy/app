import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  moment: {
    flex: 1,
    height: 77,
    width: 376,
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  momentTitle: {
    padding: 2,
    textAlign: 'left',
    fontSize: 21,
    lineHeight: 25,
    marginLeft: 7,
    marginRight: 10,
    fontFamily: 'Circular Std',
  },
  momentTime: {
    flex: 1,
    color: '#4f4f4f',
    textAlign: 'left',
    fontSize: 18,
    fontFamily: 'Circular Std',
    lineHeight: 23,
    marginLeft: 10,
  },
  icon: {
    alignSelf: 'center',
    height: 45,
    width: 45,
  },
  iconAndMoment: {
    flexDirection: 'row',
    borderBottomColor: 'rgba(51, 51, 51, 0.2)',
    borderBottomWidth: 1,
  },
  sweat: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  textAndSweat: {
    marginTop: 4,
    flexDirection: 'row',
  },
})

