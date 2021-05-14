import * as React from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Platform, Keyboard } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import IconFA from "react-native-vector-icons/FontAwesome";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import { emailValidate } from '../../../helper/emailValidation';
import { CustomInput } from "../../../components/input";
import styles from "./WhatAbouYouStyles";

type UiSignUpStatus =
  | ''
  | 'email'
  | 'password'
  | 'cfPassword';

const WhatAboutYouScreen = ({ navigation }: any) => {
  const [firstName, changeFirstName] = React.useState<string>('');
  const [lastName, changeLastName] = React.useState<string>('');
  const [email, changeEmail] = React.useState<string>('');
  const [phoneNumber, changePhoneNumber] = React.useState<string>('');
  const [password, changePassword] = React.useState<string>('');
  const [cfPassword, changeCfPassword] = React.useState<string>('');
  const [show, setShow] = React.useState<boolean>(true);
  const [showCfPassword, setShowCfPassword] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>("");
  const [status, setStatus] = React.useState<UiSignUpStatus>('');

  React.useEffect(() => {
    setError('')
  }, [cfPassword, password, email]);

  const showPassword = () => {
    setShow(!show);
  };
  
  const showConfirmPassword = () => {
    setShowCfPassword(!showCfPassword);
  };

  const isBtnDisabled = React.useMemo(() => {
    return email === '' || password === '' || firstName === '' || lastName === '' || cfPassword === '';
  }, [email, password, firstName, lastName, cfPassword]);

  const signUp = () => {
    setError('');
    if (!emailValidate(email)) {
      setStatus('email');
      setError('Please enter a valid email address');
    }
    else if (password.length < 6) {
      setError('Passwords must be at least 6 characters long');
      setStatus('password');
    } else if (password !== cfPassword) {
      setError('Passwords do not match');
      setStatus('cfPassword');
    } else {
      changeFirstName('');
      changeLastName('');
      changeEmail('');
      changePhoneNumber('');
      changePassword('');
      changeCfPassword('');
      navigation.navigate("BirthdayScreen");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      enabled
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.signUpContainer}>
          <Text style={styles.textTitle}>What's about you?</Text>
          <Text style={styles.blurText}>
            Please take a moment to register an account
          </Text>
          <View style={styles.inputContainer}>
            <CustomInput
              icon={
                <IconFA
                  style={styles.signUpIcon}
                  name="user-o"
                  size={20}
                  color="#000"
                />
              }
              placeholder="First Name*"
              value={firstName}
              onChange={changeFirstName}
              color="rgba(0,0,0,1)"
            />
            <CustomInput
              icon={
                <IconFA
                  style={styles.signUpIcon}
                  name="user-o"
                  size={20}
                  color="#000"
                />
              }
              placeholder="Last Name*"
              value={lastName}
              onChange={changeLastName}
              color="rgba(0,0,0,1)"
            />
            {status === "email" ? (
              <CustomInput
                icon={
                  <IconFeather
                    style={styles.signUpIcon}
                    name="mail"
                    size={20}
                    color="#000"
                  />
                }
                placeholder="Email*"
                value={email}
                onChange={changeEmail}
                color="rgba(0,0,0,1)"
                error={error}
              />
            ) : (
              <CustomInput
                icon={
                  <IconFeather
                    style={styles.signUpIcon}
                    name="mail"
                    size={20}
                    color="#000"
                  />
                }
                placeholder="Email*"
                value={email}
                onChange={changeEmail}
                color="rgba(0,0,0,1)"
              />
            )}
            <View style={styles.horizontalContainer}>
              <CustomInput
                icon={
                  <IconFA
                    style={styles.dropIcon}
                    name="caret-down"
                    size={20}
                    color="#000"
                  />
                }
                value="(+84)"
                width="20%"
                pdLeft={true}
              />
              <CustomInput
                placeholder="Phone Number*"
                width="74%"
                pdLeft={true}
                value={phoneNumber}
                onChange={changePhoneNumber}
                color="rgba(0,0,0,1)"
              />
            </View>
            {status === "password" ? (
              <CustomInput
                icon={
                  <EvilIcon
                    style={styles.lockIcon}
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
                placeholder="Password*"
                value={password}
                onChange={changePassword}
                secure={show}
                error={error}
                color="rgba(0,0,0,1)"
              />
            ) : (
              <CustomInput
                icon={
                  <EvilIcon
                    style={styles.lockIcon}
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
                placeholder="Password*"
                value={password}
                onChange={changePassword}
                secure={show}
                color="rgba(0,0,0,1)"
              />
            )}
            {status === "cfPassword" ? (
              <CustomInput
                icon={
                  <EvilIcon
                    style={styles.lockIcon}
                    name="lock"
                    size={35}
                    color="#000"
                  />
                }
                subIcon={
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={showConfirmPassword}
                  >
                    <IconFeather
                      name={showCfPassword ? "eye-off" : "eye"}
                      size={20}
                      color="#000"
                    />
                  </TouchableOpacity>
                }
                placeholder="Confirm Password*"
                value={cfPassword}
                onChange={changeCfPassword}
                secure={showCfPassword}
                color="rgba(0,0,0,1)"
                error={error}
              />
            ) : (
              <CustomInput
                icon={
                  <EvilIcon
                    style={styles.lockIcon}
                    name="lock"
                    size={35}
                    color="#000"
                  />
                }
                subIcon={
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={showConfirmPassword}
                  >
                    <IconFeather
                      name={showCfPassword ? "eye-off" : "eye"}
                      size={20}
                      color="#000"
                    />
                  </TouchableOpacity>
                }
                placeholder="Confirm Password*"
                value={cfPassword}
                onChange={changeCfPassword}
                secure={showCfPassword}
                color="rgba(0,0,0,1)"
              />
            )}
            <TouchableOpacity
              disabled={isBtnDisabled}
              onPress={signUp}
              style={[
                styles.signInButton,
                { opacity: isBtnDisabled ? 0.7 : 1 }
              ]}
            >
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
            <Text style={styles.alreadyText}>
              Already on Comuni?&nbsp;
              <Text
                onPress={() => navigation.navigate("SignInScreen")}
                style={styles.signInText}
              >
                Sign In
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default WhatAboutYouScreen;
