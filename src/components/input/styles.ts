import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    inputSection: {
        position: 'relative',
    },
    customInput: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 15,
        fontSize: 14,
        borderBottomWidth: 1,
    },
    errorText: {
        fontWeight: "normal",
        marginTop: -1,
        textAlign: "left",
        fontStyle: 'italic',
        opacity: 0.5,
        fontSize: 14,
        color: 'red',
    }
});