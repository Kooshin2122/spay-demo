//
import React from 'react';
import HomeScreen from './_main';
import DepositStack from './deposit';
import WithdrawStack from './withdraw';
import TransferMoneyScreen from './transfer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
const Stack = createNativeStackNavigator();
//
const HomeStack = () => {
    //
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DepositStack" component={DepositStack} />
            <Stack.Screen name="WithdrawStack" component={WithdrawStack} />
            <Stack.Screen name="TransferMoney" component={TransferMoneyScreen} />
        </Stack.Navigator>
    )
    //
};
//
export default HomeStack;
//