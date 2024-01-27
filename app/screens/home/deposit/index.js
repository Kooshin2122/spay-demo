//
import React from 'react';
//
import Evc from './mmt';
import Agent from './agent';
import Paypal from './paypal';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
const Stack = createNativeStackNavigator();
//
const DepositStack = () => {
    //
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MMT">
            <Stack.Screen name="MMT" component={Evc} />
            <Stack.Screen name="Agent" component={Agent} />
            <Stack.Screen name="Paypal" component={Paypal} />
        </Stack.Navigator>
    )
    //
};
//
export default DepositStack;
//