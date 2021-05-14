import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './EmailSentStyles';

const EmailSentScreen = ({navigation} : any) => {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.emailSentContainer}>
          <Text style={styles.textTitle}>Sent! Check Your Email</Text>
          <Text style={styles.blurText}>
            Head over to your email to reset your password.
          </Text>
          <View style={styles.textContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
              style={styles.backButton}
            >
              <Text style={styles.backText}>Back to Sign In</Text>
            </TouchableOpacity>
          </View>
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
      </ScrollView>
    );
}

export default EmailSentScreen;