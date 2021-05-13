import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './FinishSignUpStyles';

const FinishSignUpScreen = ({navigation} : any) => {
    return (
      <View style={styles.emailSentContainer}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
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
              <Text style={styles.nextText}>Sign Up</Text>
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

export default FinishSignUpScreen;