import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");


export default StyleSheet.create({
    signUpContainer: {
        paddingTop: 30,
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
    },
    contentContainer: {
        alignItems: "center",
        width: '100%',
      },
    textTitle: {
        fontWeight: "bold",
        textTransform: 'capitalize',
        marginTop: 80,
        fontSize: 25,
        color: '#7da1ed',
    },
    blurText: {
        fontWeight: 'normal',
        marginTop: 5,
        marginBottom: 20,
        width: '60%',
        textAlign: 'center',
        opacity: 0.5,
        fontSize: 12,
    },
    inputContainer: {
        display: 'flex',
        width: width,
        paddingHorizontal: 15,
    },
    customInput: {
        width: '70%',
        padding: 10,
        paddingBottom: 15,
        paddingLeft: 30,
        fontSize: 14,
        color: 'rgba(0,0,0,0.4)',
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 1,
    },
    phoneInput: {
        width: '100%',
        padding: 10,
        paddingBottom: 15,
        paddingLeft: 0,
        fontSize: 14,
        color: 'rgba(0,0,0,1)',
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 1,
    },
    inputSection: {
        position: 'relative',
        marginBottom: 20,
    },
    signUpIcon: {
        opacity: 0.4,
        position: 'absolute',
        top: 18,
    },
    dropIcon: {
        position: 'absolute',
        right: 0,
        top: 16,
    },
    eyeIcon: {
        position: 'absolute',
        right: 0,
        opacity: 0.4,
        top: 16,
        elevation: 1,
        zIndex: 1,
    },
    lockIcon: {
        opacity: 0.4,
        position: 'absolute',
        top: 12,
        left: -8,
    },
    signInButton: {
        marginTop: 30,
        width: '100%',
        backgroundColor: '#7da1ed',
        borderRadius: 10,
        height: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgotPasswordText: {
        color: '#7da1ed',
        marginTop: 15,
        textAlign: 'center',
    },
    horizontalContainer: { 
        flexDirection:"row", 
        justifyContent: 'space-between', 
        width: '100%',
    },
    alreadyText: {
        textAlign: "center",
        opacity: 0.5,
        marginTop: 40,
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
    }
});