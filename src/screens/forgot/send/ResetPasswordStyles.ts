import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default StyleSheet.create({
    forgotPasswordContainer: {
      paddingTop: 30,
      alignItems: "center",
      height: "100%",
      backgroundColor: "#fff"
    },
    contentContainer: {
      alignItems: 'center',
      width: width,
    },
    textTitle: {
      fontWeight: "bold",
      textTransform: "capitalize",
      marginTop: 150,
      fontSize: 25,
      color: "#7da1ed"
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 70
    },
    backText: {
      color: "#7da1ed",
      fontWeight: "bold",
      fontSize: 14,
      marginBottom: 2,
      textTransform: "capitalize"
    },
    sendText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 14,
      marginBottom: 2,
      textTransform: "capitalize"
    },
    blurText: {
      fontWeight: "normal",
      marginTop: 10,
      width: "63%",
      textAlign: "center",
      opacity: 0.5,
      fontSize: 14
    },
    inputContainer: {
      display: "flex",
      width: width,
      paddingHorizontal: 15
    },
    emailIcon: {
      opacity: 0.4,
      position: "absolute",
      top: 18
    },
    sendButton: {
      width: "49%",
      backgroundColor: "#7da1ed",
      borderRadius: 10,
      height: 55,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    backButton: {
      width: "49%",
      backgroundColor: "#fff",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#7da1ed",
      height: 55,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    alreadyText: {
      textAlign: "center",
      opacity: 0.5,
      marginTop: 295,
      color: "#000000"
    },
    signInText: { 
      fontWeight: "bold",
      textDecorationLine: "underline" 
    },
  });