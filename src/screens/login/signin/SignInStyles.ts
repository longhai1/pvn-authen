import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  signInContainer: {
    paddingTop: 30,
    alignItems: "center",
    height: "100%",
    backgroundColor: "#fff"
  },
  textTitle: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 18
  },
  blurText: {
    fontWeight: "normal",
    marginTop: 5,
    width: "55%",
    textAlign: "center",
    opacity: 0.5,
    fontSize: 14
  },
  inputContainer: {
    display: "flex",
    width: "100%",
    paddingHorizontal: 15
  },
  emailIcon: {
    opacity: 0.4,
    position: "absolute",
    top: 18
  },
  signInButton: {
    marginTop: 50,
    width: "100%",
    backgroundColor: "#7da1ed",
    borderRadius: 10,
    height: 55,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  forgotPasswordText: {
    color: "#7da1ed",
    marginTop: 15,
    textAlign: "center"
  },
  styledImg: {
    maxWidth: width,
    maxHeight: 330,
    marginTop: 50
  },
  accountText: { textAlign: "center", opacity: 0.5, marginTop: 10 },
  signUpText: { fontWeight: "bold", textDecorationLine: "underline" }
});
