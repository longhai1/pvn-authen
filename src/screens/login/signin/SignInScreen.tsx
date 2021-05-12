import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { CustomInput } from "../../../components/input";
import { emailValidate } from '../../../helper/emailValidation';
import styles from "./SignInStyles";
import { sign } from "crypto";

type UiSignInStatus =
  | ''
  | 'email'
  | 'password';

const SignInScreen = ({ navigation }: any) => {
  const [email, changeEmail] = React.useState<string>("");
  const [password, changePassword] = React.useState<string>("");
  const [show, setShow] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>("");
  const [status, setStatus] = React.useState<UiSignInStatus>('');
  const [passwordStatus, setPasswordStatus] = React.useState<UiSignInStatus>('');

  React.useEffect(() => {
    setError('')
  }, [email, password]);
  
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
      navigation.navigate("PickCategoriesScreen");
    }
  };
  return (
    <View style={styles.signInContainer}>
      <Text style={styles.textTitle}>Lorem ipsum dolor sit consectetur</Text>
      <Text style={styles.blurText}>
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
              <TouchableOpacity onPress={showPassword}>
                <IconFeather
                  style={styles.eyeIcon}
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
              <TouchableOpacity onPress={showPassword}>
                <IconFeather
                  style={styles.eyeIcon}
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
          disabled={isBtnDisabled}
          style={[styles.signInButton, { opacity: isBtnDisabled ? 0.7 : 1 }]}
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
  );
};

export default SignInScreen;
