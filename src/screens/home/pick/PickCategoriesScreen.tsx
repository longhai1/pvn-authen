import * as React from "react";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import loginActions from "../../../actions/loginAction";
import styles from "./PickCategoriesStyles";
import { loginState } from '../../../reducers/loginReducer';

interface HomeProps {
  logout: () => void;
  loginState: loginState;
  navigation: any;
}

const PickCategoriesScreen = (props: HomeProps) => {
  const { navigation, logout, loginState } = props;

  React.useEffect(() => {
    console.log(loginState.isLoggedIn)
  })

  const logOut = () => {
    logout();
    AsyncStorage.removeItem("LoginStatus", () => console.log("removed"));
    navigation.navigate("SignInScreen");
  };

  return (
    <View style={styles.emailSentContainer}>
      <Text style={styles.textTitle}>
        Pick 5 initial categories of interest
      </Text>
      <TouchableOpacity
        style={[styles.signInButton, { opacity: 1 }]}
        onPress={logOut}
      >
        <Text style={styles.signInText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    loginState: state.login
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    logout: () => dispatch(loginActions.logoutSuccess())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PickCategoriesScreen);
