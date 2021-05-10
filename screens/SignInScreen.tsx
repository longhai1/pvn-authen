import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const { width } = Dimensions.get("window");

const SignInScreen = ({navigation} : any) => {
    const [email, changeEmail] = React.useState<string>('');
    const [password, changePassword] = React.useState<string>('');
    return (
      <View style={styles.signInContainer}>
        <Text style={styles.textTitle}>Lorem ipsum dolor sit consectetur</Text>
        <Text style={styles.blurText}>
          Grow your business fast with online order system
        </Text>
        <Image
          resizeMode="contain"
          style={{
            maxWidth: width,
            maxHeight: 330,
            marginTop: 50,
          }}
          source={require("../assets/icons/comuni_bg1.png")}
        />
        <View style={styles.inputContainer}>
          <View style={styles.emailSection}>
            <IconFeather
              style={styles.emailIcon}
              name="mail"
              size={20}
              color="#000"
            />
            <TextInput style={styles.customInput} placeholder="Email" value={email} onChangeText={changeEmail} />
          </View>
          <View style={styles.passwordSection}>
            <EvilIcon
              style={styles.lockIcon}
              name="lock"
              size={35}
              color="#000"
            />
            <TextInput style={styles.customInput} secureTextEntry={true} placeholder="Password" value={password} onChangeText={changePassword} />
          </View>
          <TouchableOpacity
            style={styles.signInButton}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 14,
                marginBottom: 2,
                textTransform: "capitalize",
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
          <Text onPress={() => navigation.navigate('ForgotPasswordScreen')} style={styles.forgotPasswordText}>Forgot Password?</Text>
          <Text style={{ textAlign: "center", opacity: 0.5, marginTop: 10 }}>
            Don't have an account?{" "}
            <Text
            onPress={() => navigation.navigate('SignUpScreen')}
              style={{ fontWeight: "bold", textDecorationLine: "underline" }}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    );
}

export default SignInScreen;

const styles = StyleSheet.create({
    signInContainer: {
        paddingTop: 30,
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#fff',
    },
    textTitle: {
        fontWeight: "bold",
        marginTop: 20,
        fontSize: 18,
    },
    blurText: {
        fontWeight: 'normal',
        marginTop: 5, 
        width: '55%',
        textAlign: 'center',
        opacity: 0.5,
        fontSize: 14,
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
    emailSection: {
        position: 'relative',
        marginBottom: 20,
    },
    passwordSection: {
        position: 'relative',
    },
    emailIcon: {
        opacity: 0.4,
        position: 'absolute',
        top: 18,
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