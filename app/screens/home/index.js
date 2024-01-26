//
import React from 'react';
import HomeScreen from './_main';
import WithdrawStack from './withdraw';
import { Qr, Evc, Paypal } from './deposit';
import { SendToQr, SendToEvc, SendToPaypal, } from './send';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
const Stack = createNativeStackNavigator();
//
const HomeStack = () => {
    //
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="WithdrawStack" component={WithdrawStack} />
        </Stack.Navigator>
    )
    //
};
//
export default HomeStack;
//