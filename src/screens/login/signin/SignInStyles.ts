import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = Dimensions.get("screen").height;

export default StyleSheet.create({
  signInContainer: {
    paddingTop: 30,
    alignItems: "center",
    maxHeight: height,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  textTitle: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
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
    position: "absolute",
    top: 18,
  },
  lockIcon: {
    position: "absolute",
    top: 12,
    left: -6,
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    opacity: 0.4,
    top: 16,
    elevation: 1,
    zIndex: 1,
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
  forgotPasswordText: {
    color: "#7da1ed",
    marginTop: 15,
    textAlign: "center"
  },
  styledImg: {
    maxWidth: width,
    height: 330,
    marginTop: 50
  },
  accountText: { textAlign: "center", opacity: 0.5, marginTop: 10, marginBottom: 18 },
  signUpText: { fontWeight: "bold", textDecorationLine: "underline" },
  signInText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 2,
    textTransform: "capitalize"
  },
});
