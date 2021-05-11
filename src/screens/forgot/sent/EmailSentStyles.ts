import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    emailSentContainer: {
        paddingTop: 30,
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#fff',
    },
    textTitle: {
        fontWeight: "bold",
        textTransform: 'capitalize',
        marginTop: 150,
        fontSize: 25,
        color: '#7da1ed',
    },
    blurText: {
        fontWeight: 'normal',
        marginTop: 10, 
        width: '63%',
        textAlign: 'center',
        opacity: 0.5,
        fontSize: 14,
    },
    textContainer: {
        display: 'flex',
        width: '100%',
        paddingHorizontal: 15,
    },
    backButton: {
        marginTop: 70,
        width: '100%',
        backgroundColor: '#7da1ed',
        borderRadius: 10,
        height: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 2,
        textTransform: "capitalize",
    },
    alreadyText: {
        textAlign: "center",
        opacity: 0.5,
        marginTop: 390,
        color: "#000000"
    },
    signInText: { 
        fontWeight: "bold",
        textDecorationLine: "underline" 
    },
});