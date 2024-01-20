//
import React from 'react';
import { Formik } from 'formik';
import { COLORS } from '../../../../theme';
import { DepositHeader } from '../components';
import { SIZES } from '../../../../constants';
import { CustomBtn, ListHeader, OutlinedTextInput, TransactionsCard } from '../../../../components';
import { Feather, MaterialCommunityIcons } from 'react-native-vector-icons';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
//
const SendToEvc = ({ route }) => {
    //
    const { depositName, depositDesc } = route?.params;
    //
    const payload = { amount: '', mobileNumber: '', password: '' }
    //
    const onSend = (values) => {
        console.log('Form submitted with values:', values);
        // code here....
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
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ paddingBottom: "5%" }}>
                        <DepositHeader depositName={depositName} depositDesc={depositDesc} />
                        {/* form */}
                        <Formik
                            onSubmit={onSend}
                            initialValues={payload}
                        >
                            {({ values, handleChange, handleSubmit, errors }) => (
                                <View style={{ rowGap: 10, paddingHorizontal: "3.5%", paddingVertical: "4%" }}>
                                    <View>
                                        {/* OutlinedTextInput for mobile number */}
                                        <OutlinedTextInput
                                            placeholder="Mobile"
                                            label="Mobile Number"
                                            keyboardType="decimal-pad"
                                            value={values.mobileNumber}
                                            onChangeText={handleChange('mobileNumber')}
                                            Left={() => <Feather name="phone-call" size={23} color={COLORS.primary_color} />}
                                            Right={() => <MaterialCommunityIcons name="account-multiple-outline" size={27} color={COLORS.primary_color} />}

                                        />
                                        {/* OutlinedTextInput for Email */}
                                        <OutlinedTextInput
                                            label="Amount"
                                            placeholder="Amount"
                                            value={values.amount}
                                            keyboardType="decimal-pad"
                                            onChangeText={handleChange('amount')}
                                            Left={() => <Feather name="dollar-sign" size={23} color={COLORS.primary_color} />}
                                            Right={() => <Text style={[SIZES.text_base, { color: COLORS.primary_color }]}>amount</Text>}
                                        />
                                        {/* OutlinedTextInput for Password */}
                                        <OutlinedTextInput
                                            label="Password"
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
                        {/* recent transactions */}
                        <View style={styles.transactionsCardCon}>
                            <ListHeader
                                title="Recent transactions"
                                textButton="see more"
                            />
                            <TransactionsCard />
                            <TransactionsCard
                                status="income"
                            />
                            <TransactionsCard />
                            <TransactionsCard
                                status="income"
                            />
                            <TransactionsCard />
                            <TransactionsCard
                                status="income"
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
    //
}
//
export default SendToEvc;
//
const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: COLORS.bg_primary
    },
    transactionsCardCon: {
        rowGap: 10,
        paddingHorizontal: "3%"
    },
});
//