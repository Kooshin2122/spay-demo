//
import React from 'react';
import ContactsScreen from './_main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
const Stack = createNativeStackNavigator();
//
const ContactsStack = () => {
    //
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Contacts" component={ContactsScreen} />
        </Stack.Navigator>
    )
    //
};
//
export default ContactsStack;
//