import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from './screens/login/signin';
import { WhatAboutYouScreen } from './screens/signup/about';
import { ResetPasswordScreen } from './screens/forgot/send';
import { EmailSentScreen } from './screens/forgot/sent';
import { BirthdayScreen } from './screens/signup/birthday';
import { FinishSignUpScreen } from './screens/signup/finish';
import { TermAndConditionsScreen } from './screens/signup/terms';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignInScreen" headerMode='none'
      >
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="WhatAboutYouScreen" component={WhatAboutYouScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        <Stack.Screen name="EmailSentScreen" component={EmailSentScreen} />
        <Stack.Screen name="BirthdayScreen" component={BirthdayScreen} />
        <Stack.Screen name="FinishSignUpScreen" component={FinishSignUpScreen} />
        <Stack.Screen name="TermAndConditionsScreen" component={TermAndConditionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
