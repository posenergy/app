import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  moment: {
    flex: 1,
    height: 97,
    width: 376,
    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomColor: 'rgba(51, 51, 51, 0.2)',
    borderBottomWidth: 1,
    margin: 5,
  },
  momentTitle: {
    padding: 2,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 21,
    lineHeight: 25,
    marginLeft: 20,
  },
  momentTime: {
    flex: 1,
    color: '#4f4f4f',
    textAlign: 'left',
    fontSize: 20,
    lineHeight: 23,
    marginLeft: 20,
  },
  icon: {
    height: 5,
    width: 5,
  },
  iconAndMoment: {
    flexDirection: 'row',
  },
  sweat: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  textAndSweat: {
    flexDirection: 'row',
  },
})