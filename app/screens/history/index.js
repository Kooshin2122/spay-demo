//
import React from 'react';
import HistoryScreen from './_main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
const Stack = createNativeStackNavigator();
//
const HistoryStack = () => {
    //
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="History" component={HistoryScreen} />
        </Stack.Navigator>
    )
    //
};
//
export default HistoryStack;
//