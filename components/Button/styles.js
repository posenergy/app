import { StyleSheet } from 'react-native'

// const {height, width} = Dimensions.get('window')

export default StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0)',
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
    display: 'flex',
    lineHeight: 19,
    fontSize: 16,
    height: 'auto',
    width: 'auto',
    padding: 2,
  },
  filter: {
    backgroundColor: '#F2F2F2',
    display: 'flex',
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
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
    width: 286,
    backgroundColor: '#545680',
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
  },
  picker: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 51,
    width: 420,
    backgroundColor: '#545680',
  },
})
