//
import React from 'react';
import AccountSettingScreen from './_main';
import MyTicketsScreen from './my_tickets';
import MyVoucherScreen from './my_voucher';
import EditProfileScreen from './edit_profile';
import PaymentMethodScreen from './payment_method';
import PrivacyPolicyScreen from './privacy_and_policy';
import TermsAndConditionsScreen from './terms_and_conditions';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
const Stack = createNativeStackNavigator();
//
const AccountSettingStack = () => {
    //
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AccountSetting" component={AccountSettingScreen} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="EditProfile" component={EditProfileScreen} />
                <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
                <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
                <Stack.Screen name="TermsAndConditions" component={TermsAndConditionsScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
    //
};
//
export default AccountSettingStack;
//