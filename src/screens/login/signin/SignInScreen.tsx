import * as React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import { CustomInput } from "../../../components/input";
import styles from "./SignInStyles";

const SignInScreen = ({ navigation }: any) => {
  const [date, setDate] = React.useState<Date>(new Date());
  const [email, changeEmail] = React.useState<string>("");
  const [password, changePassword] = React.useState<string>("");
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
        <CustomInput
          icon={
            <IconFeather
              style={styles.emailIcon}
              name="mail"
              size={20}
              color="#000"
            />
          }
          placeholder="Email"
          value={email}
          onChange={changeEmail}
        />
        <CustomInput
          icon={
            <IconFeather
              style={styles.emailIcon}
              name="mail"
              size={20}
              color="#000"
            />
          }
          placeholder="Password"
          value={password}
          marginBot={true}
          secure={true}
          onChange={changePassword}
        />
        <TouchableOpacity style={styles.signInButton}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 14,
              marginBottom: 2,
              textTransform: "capitalize"
            }}
          >
            Sign In
          </Text>
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
