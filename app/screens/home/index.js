//
import React from 'react';
import HomeScreen from './_main';
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
            <Stack.Screen name="Qr" component={Qr} />
            <Stack.Screen name="Evc" component={Evc} />
            <Stack.Screen name="Paypal" component={Paypal} />
            {/* send  */}
            <Stack.Screen name="SendToQr" component={SendToQr} />
            <Stack.Screen name="SendToEvc" component={SendToEvc} />
            <Stack.Screen name="SendToPaypal" component={SendToPaypal} />
        </Stack.Navigator>
    )
    //
};
//
export default HomeStack;
//