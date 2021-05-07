import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';

const ForgotPasswordScreen = ({navigation} : any) => {
    const [email, changeEmail] = React.useState<string>('');

    return (
      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.textTitle}>Reset Your Password</Text>
        <Text style={styles.blurText}>
          Enter your email address & we'll send you a new password to reset your password.
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.emailSection}>
            <IconFeather
              style={styles.emailIcon}
              name="mail"
              size={20}
              color="#000"
            />
            <TextInput style={styles.customInput} placeholder="e.g,.youremail@gail.com" value={email} onChangeText={changeEmail} />
          </View>
          <View style={{ flexDirection:"row", justifyContent: 'space-between', marginTop: 70 }}>
            <TouchableOpacity
                onPress={() => navigation.navigate("SignInScreen")}
                style={styles.backButton}
            >
                <Text
                style={{
                    color: "#7da1ed",
                    fontWeight: "bold",
                    fontSize: 14,
                    marginBottom: 2,
                    textTransform: "capitalize",
                }}
                >
                Back
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("EmailSentScreen")}
                style={styles.sendButton}
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
                Send
                </Text>
            </TouchableOpacity>

          </View>
          <Text style={{ textAlign: "center", opacity: 0.5, marginTop: 255, color: '#000000' }}>
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

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    forgotPasswordContainer: {
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
    sendButton: {
        width: '49%',
        backgroundColor: '#7da1ed',
        borderRadius: 10,
        height: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        width: '49%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#7da1ed',
        height: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});