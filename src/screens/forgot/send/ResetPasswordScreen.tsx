import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import { CustomInput } from "../../../components/input";
import styles from './ResetPasswordStyles';

const ResetPasswordScreen = ({ navigation }: any) => {
  const [email, changeEmail] = React.useState<string>("");

  return (
    <View style={styles.forgotPasswordContainer}>
      <Text style={styles.textTitle}>Reset Your Password</Text>
      <Text style={styles.blurText}>
        Enter your email address & we'll send you a new password to reset your
        password.
      </Text>
      <View style={styles.inputContainer}>
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
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignInScreen")}
            style={styles.backButton}
          >
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("EmailSentScreen")}
            style={styles.sendButton}
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
  );
};

export default ResetPasswordScreen;
