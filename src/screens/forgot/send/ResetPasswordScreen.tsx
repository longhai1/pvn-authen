import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import { emailValidate } from '../../../helper/emailValidation';
import { CustomInput } from "../../../components/input";
import styles from './ResetPasswordStyles';

const ResetPasswordScreen = ({ navigation }: any) => {
  const [email, changeEmail] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {
    setError('')
  }, [email]);

  const isBtnDisabled = React.useMemo(() => {
    return email == '';
  }, [email]);

  const submitEmail = () => {
    setError('');
    if (!emailValidate(email)) {
      setError('Please enter a valid email address');
      return;
    }
    changeEmail('');
    navigation.navigate("EmailSentScreen")
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.textTitle}>Reset Your Password</Text>
        <Text style={styles.blurText}>
          Enter your email address & we'll send you a new password to reset your
          password.
        </Text>
        <View style={styles.inputContainer}>
          {error ? (
            <CustomInput
              icon={
                <IconFeather
                  style={styles.emailIcon}
                  name="mail"
                  size={20}
                  color="#000"
                />
              }
              placeholder="e.g,.youremail@gail.com"
              value={email}
              onChange={changeEmail}
              color="rgba(0,0,0,1)"
              error={error}
            />
          ) : (
            <CustomInput
              icon={
                <IconFeather
                  style={styles.emailIcon}
                  name="mail"
                  size={20}
                  color="#000"
                />
              }
              placeholder="e.g,.youremail@gail.com"
              value={email}
              onChange={changeEmail}
              color="rgba(0,0,0,1)"
            />
          )}

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
              style={styles.backButton}
            >
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={isBtnDisabled}
              onPress={submitEmail}
              style={[styles.sendButton, { opacity: isBtnDisabled ? 0.7 : 1 }]}
            >
              <Text style={styles.sendText}>Send</Text>
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
      </View>
    </ScrollView>
  );
};

export default ResetPasswordScreen;
