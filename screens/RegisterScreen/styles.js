import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    viewcontainer: {
        alignSelf: 'center',
        marginTop: 61,
    },
    text: {
        color: '#000000',
        alignSelf: 'center',
        marginTop: 7,
        fontSize: 12,

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
});


