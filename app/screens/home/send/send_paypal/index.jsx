//
import React from 'react';
import { Formik } from 'formik';
import { COLORS } from '../../../../theme';
import { DepositHeader } from '../components';
import { CustomBtn, OutlinedTextInput } from '../../../../components';
import { Feather, MaterialIcons, MaterialCommunityIcons } from 'react-native-vector-icons';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SIZES } from '../../../../constants';
//
const SendToPaypal = ({ route }) => {
    //
    const { depositName, depositDesc } = route?.params;
    //
    const payload = { amount: '', paypalAccount: '', password: '' }
    //
    const onSend = (values) => {
        // Handle the form submission logic here
        console.log('Form submitted with values:', values);
    };
    //
    return (
        <SafeAreaView style={styles.conatainer}>
            <KeyboardAvoidingView
                keyboardVerticalOffset={15}
                behavior={Platform.OS == 'ios' ? 'padding' : null}
                style={{ flex: 1 }}
                enabled
            >
                <ScrollView style={{ flex: 1 }}>
                    <DepositHeader depositName={depositName} depositDesc={depositDesc} />
                    {/* form */}
                    <Formik
                        onSubmit={onSend}
                        initialValues={payload}
                    >
                        {({ values, handleChange, handleSubmit, errors }) => (
                            <View style={{ rowGap: 30, paddingHorizontal: "3.5%", paddingVertical: "7%" }}>
                                <View>
                                    <Text style={[SIZES.text_base]}>
                                        Send money to paypal account
                                    </Text>
                                    {/* OutlinedTextInput for mobile number */}
                                    <OutlinedTextInput
                                        placeholder="Paypal Account"
                                        keyboardType="decimal-pad"
                                        value={values.paypalAccount}
                                        onChangeText={handleChange('paypalAccount')}
                                        Left={() => <MaterialIcons name="alternate-email" size={23} color={COLORS.primary_color} />}
                                    />
                                    {/* OutlinedTextInput for Email */}
                                    <OutlinedTextInput
                                        placeholder="Amount"
                                        value={values.amount}
                                        keyboardType="decimal-pad"
                                        onChangeText={handleChange('amount')}
                                        Left={() => <Feather name="dollar-sign" size={23} color={COLORS.primary_color} />}
                                        Right={() => <Text style={[SIZES.text_base, { color: COLORS.primary_color }]}>amount</Text>}
                                    />
                                    {/* OutlinedTextInput for Password */}
                                    <OutlinedTextInput
                                        secureTextEntry
                                        placeholder="Password"
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        Left={() => <MaterialCommunityIcons name="lock-outline" size={23} color={COLORS.primary_color} />}
                                    />
                                </View>
                                {/* Submit Button */}
                                <CustomBtn title="Send" onClickHandler={handleSubmit} />
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
    //
}
//
export default SendToPaypal;
//
const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: COLORS.bg_primary
    }
});
//