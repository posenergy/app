import { StyleSheet } from 'react-native'

// const {height, width} = Dimensions.get('window')

export default StyleSheet.create({
  button: {
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  spinner: {
    'paddingLeft': 20,
  },
  red: {
    fontSize: 20,
    color: '#D50000',
    fontFamily: 'Circular Std',
  },
  white: {
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
    textAlignVertical: 'center',
    fontFamily: 'Circular Std',
  },
  black: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Circular Std',
  },
  blacksmall: {
    fontSize: 16,
    lineHeight: 19,
    color: 'black',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    fontFamily: 'Circular Std',
  },
  greysmall: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: 2,
    color: '#4F4F4F',
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontFamily: 'CircularStd-Book',
  },
  grey: {
    fontSize: 20,
    color: '#333333',
    fontFamily: 'Circular Std',
  },
  blue: {
    fontSize: 20,
    color: '#1565C0',
    fontFamily: 'Circular Std',
  },
  boldBlack: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Circular Std',
  },
  filterButton: {
    marginTop: 13,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 50,
    width: 292,
    margin: 8,
    borderRadius: 5,
    marginBottom: 13,
  },
  mindmodal: {
    backgroundColor: 'transparent',
    height: 40,
    width: 340,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    borderTopColor: 'rgba(51, 51, 51, 0.4)',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  wrapview: {
    alignItems: 'center',
    height: 27,
    marginRight: 10,
    borderRadius: 20,
  },
  filter: {
    margin: 0,
    backgroundColor: '#F2F2F2',
    display: 'flex',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    height: 27,
    borderRadius: 5,
  },
  filterClick: {
    margin: 0,
    backgroundColor: '#545680',
    display: 'flex',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    height: 27,
    borderRadius: 5,
  },
  login: {
    marginTop: 13,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 50,
    width: 292,
    margin: 8,
    borderRadius: 5,
    marginBottom: 13,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  purple: {
    marginTop: 13,
    backgroundColor: '#545680',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 50,
    width: 292,
    margin: 8,
    borderRadius: 5,
    marginBottom: 13,
  },
  menu: {
    height: 40,
    width: 40,
    backgroundColor: 'rgba(52, 52, 52, 0)',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#545680',
    flex: 1,
    height: '5%',
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    width: 300,
  },
 schedule: {
    height: 49,
    width: 292,
    backgroundColor: '#545680',
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    alignItems: 'center',
  },
  picker: {
    height: '12%',
    width: '100%',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#545680',
  },
})
