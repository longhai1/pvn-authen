import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';


const SignUpBirthdayScreen = ({navigation} : any) => {
    return (
      <View style={styles.signUpContainer}>
        <Text style={styles.textTitle}>What's Your Birthday & Gender?</Text>
        <Text style={styles.blurText}>
          Please note that all information is strictly confidental.
        </Text>
        <View style={styles.inputContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: 20,
            }}
          >
            <View style={styles.birthdaySection}>
              <IconFA
                style={styles.dropMonthIcon}
                name="caret-down"
                size={20}
                color="#000"
              />
              <Text style={{ fontSize: 14, opacity: 0.4 }}>Month</Text>
              <TextInput style={styles.birthInput} value="12" />
            </View>
            <View style={styles.birthdaySection}>
              <Text style={{ fontSize: 14, opacity: 0.4 }}>Day</Text>
              <TextInput style={styles.birthInput} value="5" />
            </View>
            <View style={styles.birthdaySection}>
              <IconFA
                style={styles.dropIcon}
                name="caret-down"
                size={20}
                color="#000"
              />
              <Text style={{ fontSize: 14, opacity: 0.4 }}>Year</Text>
              <TextInput style={styles.birthInput} value="1997" />
            </View>
          </View>
          <View style={styles.inputSection}>
            <FontistoIcon
              style={styles.radioChecked}
              name="radio-btn-active"
              size={20}
              color="#000"
            />
            <TextInput
              style={styles.customInput}
              secureTextEntry={false}
              editable={false}
              value="Female"
            />
          </View>
          <View style={styles.inputSection}>
            <FontistoIcon
              style={styles.radioBtnIcon}
              name="radio-btn-passive"
              size={20}
              color="#000"
            />
            <TextInput
              style={styles.customInput}
              secureTextEntry={false}
              editable={false}
              value="Male"
            />
          </View>
          <View style={styles.passwordSection}>
            <FontistoIcon
              style={styles.radioBtnIcon}
              name="radio-btn-passive"
              size={20}
              color="#000"
            />
            <TextInput
              style={styles.customInput}
              secureTextEntry={false}
              editable={false}
              value="Prefer Not to Say"
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("FinishSignUpScreen")}
            style={styles.signUpButton}
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

export default SignUpBirthdayScreen;

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
        width: '60%',
        textAlign: 'center',
    },
    blurText: {
        fontWeight: 'normal',
        marginTop: 10,
        marginBottom: 50,
        width: '100%',
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
        paddingLeft: 0,
        fontSize: 14,
        color: 'rgba(0,0,0,1)',
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 1,
    },
    birthInput: {
        width: '100%',
        paddingTop: 8,
        paddingBottom: 6,
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
    birthdaySection: {
        position: 'relative',
        marginBottom: 20,
        width: '31%',
    },
    passwordSection: {
        position: 'relative',
    },
    dropIcon: {
        position: 'absolute',
        right: 0,
        top: 36,
    },
    dropMonthIcon: {
        position: 'absolute',
        right: 5,
        top: 36,
    },
    radioBtnIcon: {
        position: 'absolute',
        right: 0,
        opacity: 0.4,
        top: 16,
    },
    radioChecked: {
        position: 'absolute',
        right: 0,
        top: 16,
        color: '#6a88e3',
    },
    signUpButton: {
        marginTop: 120,
        width: '100%',
        backgroundColor: '#7da1ed',
        borderRadius: 10,
        height: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});