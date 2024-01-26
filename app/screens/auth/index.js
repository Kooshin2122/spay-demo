//
import React from 'react';
import WelcomeScreen from './_main';
import SignUpStack from './sign_up';
import LoginStack from './login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
const Stack = createNativeStackNavigator();
//
const AuthStack = () => {
    //
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="SignUpStack" component={SignUpStack} />
            <Stack.Screen name="LoginStack" component={LoginStack} />
        </Stack.Navigator>
    )
    //
};
//
export default AuthStack;
//
//