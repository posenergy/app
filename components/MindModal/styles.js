import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'column',
  },
  modal: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
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
  opacity: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 5,
    height: 12,
    width: 12,
  },
  filteract: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  imageheader: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginRight: 5,
  },
  innerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
    width: 365,
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'column',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  image: {
    width: 12,
    height: 12,
    alignSelf: 'flex-end',
    marginTop: 15,
    marginRight: 6,
  },
 bigview: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    padding: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
    width: 333,
  },
})
