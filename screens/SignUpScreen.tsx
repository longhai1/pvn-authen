import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFA from 'react-native-vector-icons/FontAwesome';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';


const SignUpScreen = ({navigation} : any) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [showCfPassword, setShowCfPassword] = React.useState<boolean>(false);

    return (
      <View style={styles.signUpContainer}>
        <Text style={styles.textTitle}>What's about you?</Text>
        <Text style={styles.blurText}>
          Please take a moment to register an account
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputSection}>
            <IconFA
              style={styles.signUpIcon}
              name="user-o"
              size={20}
              color="#000"
            />
            <TextInput style={styles.customInput} placeholder="First Name*" />
          </View>
          <View style={styles.inputSection}>
            <IconFA
              style={styles.signUpIcon}
              name="user-o"
              size={20}
              color="#000"
            />
            <TextInput style={styles.customInput} placeholder="Last Name*" />
          </View>
          <View style={styles.inputSection}>
            <IconFeather
              style={styles.signUpIcon}
              name="mail"
              size={20}
              color="#000"
            />
            <TextInput style={styles.customInput} placeholder="Email*" />
          </View>
          <View style={{ flexDirection:"row", justifyContent: 'space-between', width: '100%'}}>
          <View style={styles.phoneLeftSection}>
            <IconFA
              style={styles.dropIcon}
              name="caret-down"
              size={20}
              color="#000"
            />
            <TextInput style={styles.phoneInput} value="(+84)" />
          </View>
          <View style={styles.phoneRightSection}>
            <TextInput style={styles.phoneInput} placeholder="Phone Number*" />
          </View>
          </View>
          <View style={styles.inputSection}>
            <EvilIcon
              style={styles.lockIcon}
              name="lock"
              size={35}
              color="#000"
            />
            <FeatherIcon
              style={styles.eyeIcon}
              name="eye-off"
              size={20}
              color="#000"
              onPress={() => setShowPassword(!showPassword)}
            />
            <TextInput style={styles.customInput} secureTextEntry={showPassword} placeholder="Password*" />
          </View>
          <View style={styles.passwordSection}>
            <EvilIcon
              style={styles.lockIcon}
              name="lock"
              size={35}
              color="#000"
            />
            <FeatherIcon
              style={styles.eyeIcon}
              name="eye-off"
              size={20}
              color="#000"
              onPress={() => setShowCfPassword(!showCfPassword)}
            />
            <TextInput style={styles.customInput} secureTextEntry={showCfPassword} placeholder="Confirm Password*" />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpBirthdayScreen")}
            style={styles.signInButton}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 14,
                marginBottom: 2,
                textTransform: "capitalize"
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
          <Text style={{ textAlign: "center", opacity: 0.5, marginTop: 40 }}>
            Already on Comuni?&nbsp;
            <Text
              onPress={() => navigation.navigate("SignInScreen")}
              style={{ fontWeight: "bold", textDecorationLine: "underline" }}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    signUpContainer: {
        paddingTop: 30,
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#fff',
    },
    textTitle: {
        fontWeight: "bold",
        textTransform: 'capitalize',
        marginTop: 80,
        fontSize: 25,
        color: '#7da1ed',
    },
    blurText: {
        fontWeight: 'normal',
        marginTop: 5,
        marginBottom: 20,
        width: '60%',
        textAlign: 'center',
        opacity: 0.5,
        fontSize: 12,
    },
    inputContainer: {
        display: 'flex',
        width: '100%',
        paddingHorizontal: 15,
    },
    customInput: {
        width: '100%',
        padding: 10,
        paddingBottom: 15,
        paddingLeft: 30,
        fontSize: 14,
        color: 'rgba(0,0,0,0.4)',
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 1,
    },
    phoneInput: {
        width: '100%',
        padding: 10,
        paddingBottom: 15,
        paddingLeft: 0,
        fontSize: 14,
        color: 'rgba(0,0,0,1)',
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 1,
    },
    inputSection: {
        position: 'relative',
        marginBottom: 20,
    },
    phoneLeftSection: {
        position: 'relative',
        marginBottom: 20,
        width: '20%',
    },
    phoneRightSection: {
        position: 'relative',
        marginBottom: 20,
        width: '74%',
    },
    passwordSection: {
        position: 'relative',
    },
    signUpIcon: {
        opacity: 0.4,
        position: 'absolute',
        top: 18,
    },
    dropIcon: {
        position: 'absolute',
        right: 0,
        top: 16,
    },
    eyeIcon: {
        position: 'absolute',
        right: 0,
        opacity: 0.4,
        top: 16,
    },
    lockIcon: {
        opacity: 0.4,
        position: 'absolute',
        top: 12,
        left: -8,
    },
    signInButton: {
        marginTop: 50,
        width: '100%',
        backgroundColor: '#7da1ed',
        borderRadius: 10,
        height: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgotPasswordText: {
        color: '#7da1ed',
        marginTop: 15,
        textAlign: 'center',
    }
});