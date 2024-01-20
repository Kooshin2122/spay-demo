//
import React from 'react';
import CardsScreen from './_main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
const Stack = createNativeStackNavigator();
//
const CardsStack = () => {
    //
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Cards" component={CardsScreen} />
        </Stack.Navigator>
    )
    //
};
//
export default CardsStack;
//