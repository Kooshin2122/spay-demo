//
import React from 'react';
import HomeScreen from './_main';
import { Qr, Evc, Paypal } from './deposit';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
const Stack = createNativeStackNavigator();
//
const HomeStack = () => {
    //
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Qr" component={Qr} />
            <Stack.Screen name="Evc" component={Evc} />
            <Stack.Screen name="Paypal" component={Paypal} />
        </Stack.Navigator>
    )
    //
};
//
export default HomeStack;
//