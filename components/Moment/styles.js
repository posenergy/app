import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  moment: {
    flex: 1,
    height: 77,
    width: 376,
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 5,
    flexDirection: 'column',
  },
  momentTitle: {
    padding: 2,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 21,
    lineHeight: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  momentTime: {
    flex: 1,
    color: '#4f4f4f',
    textAlign: 'left',
    fontSize: 18,
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
    marginLeft: 5,
  },
  textAndSweat: {
    marginTop: 2,
    flexDirection: 'row',
  },
})