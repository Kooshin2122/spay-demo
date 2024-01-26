//
import React from 'react';
import LoginScreen from './_main';
import ForgotPasswordScreen from './forgot_password';
import { VerificationScreen, CreatePasswordScreen } from '../shared';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
const Stack = createNativeStackNavigator();
//
const LoginStack = () => {
    //
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Verify" component={VerificationScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
        </Stack.Navigator>
    )
    //
};
//
export default LoginStack;
//
//