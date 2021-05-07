import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';

const EmailSentScreen = ({navigation} : any) => {
    const [email, changeEmail] = React.useState<string>('');

    return (
      <View style={styles.emailSentContainer}>
        <Text style={styles.textTitle}>Sent! Check Your Email</Text>
        <Text style={styles.blurText}>
          Head over to your email to reset your password.
        </Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignInScreen")}
            style={styles.backButton}
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
              Back to Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: "center",
            opacity: 0.5,
            marginTop: 390,
            color: "#000000",
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

export default EmailSentScreen;

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
    blurText: {
        fontWeight: 'normal',
        marginTop: 10, 
        width: '63%',
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
        marginTop: 60,
    },
    emailIcon: {
        opacity: 0.4,
        position: 'absolute',
        top: 18,
    },
    backButton: {
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