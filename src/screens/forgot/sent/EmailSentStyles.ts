import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");
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
        width: width,
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
        marginBottom: 18,
        color: "#000000"
    },
    signInText: { 
        fontWeight: "bold",
        textDecorationLine: "underline" 
    },
});