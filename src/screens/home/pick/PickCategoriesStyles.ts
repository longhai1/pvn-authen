import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default StyleSheet.create({
    emailSentContainer: {
        paddingTop: 30,
        alignItems: 'center',
        height: '100%',
        width: width,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    textTitle: {
        width: '80%',
        fontWeight: "bold",
        textTransform: 'capitalize',
        marginTop: 50,
        fontSize: 24,
        color: '#000000',
        textAlign: 'center',
    },
    signInText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 2,
        textTransform: "capitalize"
    },
    signInButton: {
        marginTop: 30,
        width: "100%",
        backgroundColor: "#7da1ed",
        borderRadius: 10,
        height: 55,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
});