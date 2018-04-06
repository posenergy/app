import { StyleSheet } from 'react-native'

// const {height, width} = Dimensions.get('window')

export default StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
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
  },
  white: {
    fontSize: 20,
    color: '#fff',
  },
  black: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  blacksmall: {
    fontSize: 16,
    lineHeight: 19,
    color: 'black',
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  grey: {
    fontSize: 20,
    color: '#333333',
    fontWeight: 'bold',
  },
  blue: {
    fontSize: 20,
    color: '#1565C0',
  },
  boldBlack: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
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
  filterclick: {
    margin: 0,
    backgroundColor: '#545680',
    display: 'flex',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    height: 27,
    marginRight: 5,
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
  },
  register: {
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 49,
    width: '100%',
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
