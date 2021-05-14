import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get("screen").height;

export default StyleSheet.create({
    emailSentContainer: {
        paddingTop: 30,
        alignItems: 'center',
        maxHeight: height,
        backgroundColor: '#fff',
        flex: 1,
    },
    textTitle: {
        fontWeight: "bold",
        textTransform: 'capitalize',
        marginTop: 150,
        fontSize: 25,
        color: '#7da1ed',
    },
    contentContainer: {
        alignItems: "center",
        width: '100%',
    },
    subtitleText: {
        fontWeight: 'normal',
        marginTop: 40, 
        width: '80%',
        textAlign: 'center',
        fontSize: 14,
    },
    blurText: {
        color: 'rgba(0,0,0,0.4)',
    },
    termText: {
        color: '#7da1ed', textDecorationLine: "underline",
        opacity: 1,
    },
    textContainer: {
        display: 'flex',
        width: '100%',
        paddingHorizontal: 15,
    },
    finishButton: {
        marginTop: 70,
        width: '100%',
        backgroundColor: '#7da1ed',
        borderRadius: 10,
        height: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    alreadyText: {
        textAlign: "center",
        opacity: 0.5,
        marginTop: 355,
        marginBottom: 22,
        color: "#000000"
    },
    signInText: { 
        fontWeight: "bold",
        textDecorationLine: "underline" 
    },
    nextText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 2,
        textTransform: "capitalize"
    },
});