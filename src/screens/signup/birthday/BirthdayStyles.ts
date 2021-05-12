import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    signUpContainer: {
        paddingTop: 30,
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#fff',
    },
    textTitle: {
        fontWeight: "bold",
        textTransform: 'capitalize',
        marginTop: 80,
        fontSize: 25,
        color: '#7da1ed',
        width: '60%',
        textAlign: 'center',
    },
    blurText: {
        fontWeight: 'normal',
        marginTop: 10,
        marginBottom: 50,
        width: '100%',
        textAlign: 'center',
        opacity: 0.5,
        fontSize: 12,
    },
    inputContainer: {
        display: 'flex',
        width: '100%',
        paddingHorizontal: 15,
    },
    customInput: {
        width: '100%',
        padding: 10,
        paddingBottom: 15,
        paddingLeft: 0,
        fontSize: 14,
        color: 'rgba(0,0,0,1)',
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 1,
    },
    birthText: {
        width: '100%',
        paddingTop: 15,
        paddingBottom: 6,
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
    birthdaySection: {
        position: 'relative',
        marginBottom: 20,
        width: '31%',
    },
    passwordSection: {
        position: 'relative',
    },
    dropIcon: {
        position: 'absolute',
        right: 0,
        top: 36,
    },
    dropMonthIcon: {
        position: 'absolute',
        right: 5,
        top: 36,
    },
    radioBtnIcon: {
        position: 'absolute',
        right: 0,
        opacity: 0.4,
        top: 16,
    },
    radioChecked: {
        position: 'absolute',
        right: 0,
        top: 16,
        color: '#6a88e3',
    },
    signUpButton: {
        marginTop: 120,
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
    },
    timeText: { 
        fontSize: 14, 
        opacity: 0.4 
    },
    timeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 20,
    },
});