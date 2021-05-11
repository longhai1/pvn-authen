import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import IconFA from "react-native-vector-icons/FontAwesome";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import { CustomInput } from "../../../components/input";
import styles from "./WhatAbouYouStyles";

const WhatAboutYouScreen = ({ navigation }: any) => {
  return (
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
        />
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
        />
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
          <CustomInput placeholder="Phone Number*" width="74%" pdLeft={true} />
        </View>
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
            <FeatherIcon
              style={styles.eyeIcon}
              name="eye-off"
              size={20}
              color="#000"
            />
          }
          placeholder="Password*"
          secure={true}
        />
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
            <FeatherIcon
              style={styles.eyeIcon}
              name="eye-off"
              size={20}
              color="#000"
            />
          }
          placeholder="Confirm Password*"
          secure={true}
          marginBot={true}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("BirthdayScreen")}
          style={styles.signInButton}
        >
          <Text
            style={styles.nextText}
          >
            Next
          </Text>
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
  );
};

export default WhatAboutYouScreen;
