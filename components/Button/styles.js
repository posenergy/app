import { Dimensions, StyleSheet } from 'react-native'


const {height, width} = Dimensions.get('window')

export default StyleSheet.create({
  button: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(52, 52, 52, 0)'
  },
  red: {
    fontSize: 20,
    color: "#D50000",
  },
  white: {
    fontSize: 20,
    color: "#fff",
  },
  black: {
    fontSize: 20,
    color: "black",
  },
  blue: {
    fontSize: 20,
    color: "#1565C0",
  },
  boldBlack: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
  },
  login: {
    marginTop: 25,
    backgroundColor: "#AC1A2F",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
    height: 50,
    width: 160,
    borderRadius: 12, 
    margin: 8
  },
  menu: {
    height: 40,
    width: 40,
    backgroundColor: 'rgba(52, 52, 52, 0)'
  },
})