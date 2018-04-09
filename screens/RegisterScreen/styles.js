import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      width: 300,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#000000',
        alignSelf: 'center',
        marginTop: 7,
        fontSize: 12,
        fontFamily: 'Circular Std',
    },
    header: {
        color: '#000000',
        alignSelf: 'center',
        marginTop: 0,
        fontSize: 20,
        fontWeight: 'bold',
    },
    boxes: {
        marginTop: 10,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        height: 50,
        width: 300,
        borderRadius: 10,
        marginTop: 15,
        alignSelf: 'center',
        textAlign: 'center',
    },
    link: {
        color: '#FFFFFF',
        alignSelf: 'center',
        marginTop: 7,
        textAlign: 'center',
        fontSize: 11,
        backgroundColor: 'transparent',
        width: 300,
        marginBottom: 15,
        fontFamily: 'Circular Std',
    },
    view: {
        flex: 1,
        alignSelf: 'center',

    },
})


