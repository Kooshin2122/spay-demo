//
import React from 'react';
import { Formik } from 'formik';
import { COLORS } from '../../../../theme';
import { DepositHeader } from '../components';
import { SIZES } from '../../../../constants';
import { CustomBtn, OutlinedTextInput } from '../../../../components';
import { Feather, MaterialCommunityIcons } from 'react-native-vector-icons';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
//
const Evc = ({ route }) => {
    //
    const { depositName, depositDesc } = route?.params;
    //
    const payload = { amount: '', mobileNumber: '', password: '' }
    //
    const onDeposit = (values) => {
        console.log('Form submitted with values:', values);
        // code here....
    };
    //
    return (
        <SafeAreaView style={styles.conatainer}>
            <DepositHeader depositName={depositName} depositDesc={depositDesc} />
            <KeyboardAvoidingView
                keyboardVerticalOffset={15}
                behavior={Platform.OS == 'ios' ? 'padding' : null}
                style={{ flex: 1 }}
                enabled
            >
                <ScrollView style={{ flex: 1 }}>
                    {/* form */}
                    <Formik
                        onSubmit={onDeposit}
                        initialValues={payload}
                    >
                        {({ values, handleChange, handleSubmit, errors }) => (
                            <View style={{ rowGap: 30, paddingHorizontal: "3.5%", paddingVertical: "7%" }}>
                                <View>
                                    <Text style={[SIZES.text_base]}>
                                        Deposit money using your mobile number
                                    </Text>
                                    {/* OutlinedTextInput for Email */}
                                    <OutlinedTextInput
                                        placeholder="Amount"
                                        value={values.amount}
                                        keyboardType="decimal-pad"
                                        onChangeText={handleChange('amount')}
                                        Left={() => <Feather name="dollar-sign" size={23} color={COLORS.primary_color} />}
                                        Right={() => <Text style={[SIZES.text_base, { color: COLORS.primary_color }]}>amount</Text>}
                                    />
                                    {/* OutlinedTextInput for mobile number */}
                                    <OutlinedTextInput
                                        placeholder="Mobile"
                                        keyboardType="decimal-pad"
                                        value={values.mobileNumber}
                                        onChangeText={handleChange('mobileNumber')}
                                        Left={() => <Feather name="phone-call" size={23} color={COLORS.primary_color} />}
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
                                <CustomBtn title="Deposit" onClickHandler={handleSubmit} />
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
export default Evc;
//
const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: COLORS.bg_primary
    }
});
//