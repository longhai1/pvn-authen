import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './EmailSentStyles';

const EmailSentScreen = ({navigation} : any) => {
    return (
      <View style={styles.emailSentContainer}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
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
        </ScrollView>
      </View>
    );
}

export default EmailSentScreen;