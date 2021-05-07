import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const SignUpScreen = ({navigation} : any) => {

    return (
      <View style={styles.signUpContainer}>
        <Text style={styles.textTitle}>What's about you?</Text>
        <Text style={styles.blurText}>
            Please take a moment to register an account
        </Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpScreen")}
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
              Next
            </Text>
          </TouchableOpacity>
          <Text style={{ textAlign: "center", opacity: 0.5, marginTop: 40 }}>
            Already on Comuni?&nbsp;
            <Text
                onPress={() => navigation.navigate('SignInScreen')}
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
        marginTop: 100,
        fontSize: 25,
        color: '#7da1ed',
    },
    blurText: {
        fontWeight: 'normal',
        marginTop: 5, 
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