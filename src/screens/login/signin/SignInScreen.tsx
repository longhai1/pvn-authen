import * as React from "react";
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, AsyncStorage } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { CustomInput } from "../../../components/input";
import { emailValidate } from '../../../helper/emailValidation';
import styles from "./SignInStyles";
import { connect } from 'react-redux';
import loginActions from '../../../actions/loginAction';
import { loginState } from '../../../reducers/loginReducer';

type UiSignInStatus =
  | ''
  | 'email'
  | 'password';

interface SignInProps {
  login: (email: string, password: string) => void;
  loginState: loginState;
  navigation: any;
}

const SignInScreen = (props : SignInProps) => {
  const {loginState, login, navigation} = props;
  const [email, changeEmail] = React.useState<string>("");
  const [password, changePassword] = React.useState<string>("");
  const [show, setShow] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>("");
  const [status, setStatus] = React.useState<UiSignInStatus>('');
  const [passwordStatus, setPasswordStatus] = React.useState<UiSignInStatus>('');

  React.useEffect(() => {
    console.log(`Login status: ${loginState.isLoggedIn}`);
    if (loginState.isLoggedIn) {
      navigation.navigate("PickCategoriesScreen");
    }
  }, [loginState.isLoggedIn])

  React.useEffect(() => {
    setError('');
  }, [email, password]);

  React.useEffect(() => {
    if (loginState.error !== "") {
      setStatus('email');
      setError(loginState.error);
    }
  }, [loginState.error]);
  
  const isBtnDisabled = React.useMemo(() => {
    return email == '' || password == '';
  }, [email, password]);

  const showPassword = () => {
    setShow(!show);
  };

  const signIn = () => {
    setError('');
    if (!emailValidate(email)) {
      setPasswordStatus('');
      setError('Please enter a valid email address');
      setStatus('email');
    } else if (password.length < 6) {
      setStatus('');
      setPasswordStatus('password');
      setError('Password must be at least 6 characters long');
    } else {
      changeEmail('');
      changePassword('');
      login(email, password);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      enabled
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.signInContainer}>
          <Text style={styles.textTitle}>
            Lorem ipsum dolor sit consectetur
          </Text>
          <Text style={styles.blurText} onPress={() => console.log(loginState.isLoggedIn)}>
            Grow your business fast with online order system
          </Text>
          <Image
            resizeMode="contain"
            style={styles.styledImg}
            source={require("../../../assets/icons/comuni_bg1.png")}
          />
          <View style={styles.inputContainer}>
            {status === "email" ? (
              <CustomInput
                icon={
                  <IconFeather
                    style={[
                      styles.emailIcon,
                      { color: email ? "#7da1ed" : "#000000" },
                      { opacity: email ? 1 : 0.4 }
                    ]}
                    name="mail"
                    size={20}
                    color="#000"
                  />
                }
                placeholder="Email"
                value={email}
                onChange={changeEmail}
                color="rgba(0,0,0,1)"
                error={error}
              />
            ) : (
              <CustomInput
                icon={
                  <IconFeather
                    style={[
                      styles.emailIcon,
                      { color: email ? "#7da1ed" : "#000000" },
                      { opacity: email ? 1 : 0.4 }
                    ]}
                    name="mail"
                    size={20}
                    color="#000"
                  />
                }
                placeholder="Email"
                value={email}
                onChange={changeEmail}
                color="rgba(0,0,0,1)"
              />
            )}
            {passwordStatus === "password" ? (
              <CustomInput
                icon={
                  <EvilIcon
                    style={[
                      styles.lockIcon,
                      { color: password ? "#7da1ed" : "#000000" },
                      { opacity: password ? 1 : 0.4 }
                    ]}
                    name="lock"
                    size={35}
                    color="#000"
                  />
                }
                subIcon={
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={showPassword}
                  >
                    <IconFeather
                      name={show ? "eye-off" : "eye"}
                      size={20}
                      color="#000"
                    />
                  </TouchableOpacity>
                }
                placeholder="Password"
                value={password}
                secure={show}
                onChange={changePassword}
                color="rgba(0,0,0,1)"
                error={error}
              />
            ) : (
              <CustomInput
                icon={
                  <EvilIcon
                    style={[
                      styles.lockIcon,
                      { color: password ? "#7da1ed" : "#000000" },
                      { opacity: password ? 1 : 0.4 }
                    ]}
                    name="lock"
                    size={35}
                    color="#000"
                  />
                }
                subIcon={
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={showPassword}
                  >
                    <IconFeather
                      name={show ? "eye-off" : "eye"}
                      size={20}
                      color="#000"
                    />
                  </TouchableOpacity>
                }
                placeholder="Password"
                value={password}
                secure={show}
                onChange={changePassword}
                color="rgba(0,0,0,1)"
              />
            )}

            <TouchableOpacity
              disabled={isBtnDisabled || loginState.isLoading}
              style={[
                styles.signInButton,
                { opacity: isBtnDisabled ? 0.7 : 1 }
              ]}
              onPress={signIn}
            >
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
            <Text
              onPress={() => navigation.navigate("ResetPasswordScreen")}
              style={styles.forgotPasswordText}
            >
              Forgot Password?
            </Text>
            <Text style={styles.accountText}>
              Don't have an account?&nbsp;
              <Text
                onPress={() => navigation.navigate("WhatAboutYouScreen")}
                style={styles.signUpText}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

function mapStateToProps(state: any) {
  return {
    loginState: state.login
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    login: (email: string, password: string) => dispatch(loginActions.actionLogin({email, password})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
