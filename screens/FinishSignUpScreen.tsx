import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FinishSignUpScreen = ({navigation} : any) => {
    return (
      <View style={styles.emailSentContainer}>
        <Text style={styles.textTitle}>Finish Signing Up</Text>
        <Text style={styles.subtitleText}>
          <Text style={styles.blurText}>
            By clicking Sign Up, you agree to our
          </Text>
          &nbsp;
          <Text
            style={styles.termText}
            onPress={() => navigation.navigate("TermAndConditionsScreen")}
          >
            Terms & Conditions
          </Text>
        </Text>
        <View style={styles.textContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignInScreen")}
            style={styles.finishButton}
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
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: "center",
            opacity: 0.5,
            marginTop: 355,
            color: "#000000"
          }}
        >
          Already on Comuni?&nbsp;
          <Text
            onPress={() => navigation.navigate("SignInScreen")}
            style={{ fontWeight: "bold", textDecorationLine: "underline" }}
          >
            Sign In
          </Text>
        </Text>
      </View>
    );
}

export default FinishSignUpScreen;

const styles = StyleSheet.create({
    emailSentContainer: {
        paddingTop: 30,
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#fff',
    },
    textTitle: {
        fontWeight: "bold",
        textTransform: 'capitalize',
        marginTop: 150,
        fontSize: 25,
        color: '#7da1ed',
    },
    subtitleText: {
        fontWeight: 'normal',
        marginTop: 40, 
        width: '80%',
        textAlign: 'center',
        fontSize: 14,
    },
    blurText: {
        color: 'rgba(0,0,0,0.4)',
    },
    termText: {
        color: '#7da1ed', textDecorationLine: "underline",
        opacity: 1,
    },
    textContainer: {
        display: 'flex',
        width: '100%',
        paddingHorizontal: 15,
    },
    finishButton: {
        marginTop: 70,
        width: '100%',
        backgroundColor: '#7da1ed',
        borderRadius: 10,
        height: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});