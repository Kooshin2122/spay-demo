//
import React from 'react';
import CreateAccountScreen from './create_account';
import CreateContactScreen from './create_contact';
import { VerificationScreen, CreatePasswordScreen } from '../shared';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
const Stack = createNativeStackNavigator();
//
const SignUpStack = () => {
    //
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
            <Stack.Screen name="CreateContact" component={CreateContactScreen} />
            <Stack.Screen name="SignUpVerifiy" component={VerificationScreen} />
            <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
        </Stack.Navigator>
    )
    //
};
//
export default SignUpStack;
//
//