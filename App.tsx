import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import EmailSentScreen from './screens/EmailSentScreen';
import SignUpBirthdayScreen from './screens/SignUpBirthdayScreen';
import FinishSignUpScreen from './screens/FinishSignUpScreen';
import TermAndConditionsScreen from './screens/TermAndConditionsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignInScreen" headerMode='none'
      >
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="EmailSentScreen" component={EmailSentScreen} />
        <Stack.Screen name="SignUpBirthdayScreen" component={SignUpBirthdayScreen} />
        <Stack.Screen name="FinishSignUpScreen" component={FinishSignUpScreen} />
        <Stack.Screen name="TermAndConditionsScreen" component={TermAndConditionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
