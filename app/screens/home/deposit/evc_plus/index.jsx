//
import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
import { COLORS } from '../../../../theme';
import { DepositHeader } from '../components';
import { SIZES } from '../../../../constants';
import { CustomBtn, OutlinedTextInput, ResponseModal } from '../../../../components';
import { Feather, MaterialCommunityIcons } from 'react-native-vector-icons';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { POST_AUTH_RAW_DATA } from '../../../../API';
//
const Evc = ({ route }) => {
    //
    const [modal, setModal] = useState(false);
    const [response, setResponse] = useState({
        data: null,
        loading: false,
        errorMessage: '',
        isError: false,
    });
    const { depositName, depositDesc } = route?.params;
    //
    const payload = { amount: '', mobileNumber: '', pin: '' }
    //
    const modalToggle = () => {
        setModal(prev => !prev)
    }
    //
    const onDeposit = async (values) => {
        try {
            setResponse((prev) => ({
                ...prev,
                loading: true,
            }))
            const endPoint = 'http://localhost:8484/mywallet/deposit/wallet?accountNo=6125383&amount=15&key=XmoyUq'
            const res = await POST_AUTH_RAW_DATA(endPoint, values);
            setResponse((prev) => ({
                ...prev,
                loading: false,
                data: res?.data,
            }))
            modalToggle()
        } catch (error) {
            setResponse((prev) => ({
                ...prev,
                isError: true,
                loading: false,
                errorMessage: error
            }))
            console.log(`error happen in the onDeposit function  line 22 ... ${error}`);
        }
    };
    //
    return (
        <SafeAreaView style={styles.conatainer}>
            <ResponseModal
                isVisible={modal}
                modalToggle={modalToggle}
                response={response}
            />
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
                        onSubmit={onDeposit}
                        initialValues={payload}
                    >
                        {({ values, handleChange, handleSubmit, errors }) => (
                            <View style={{ rowGap: 30, paddingHorizontal: "3.5%", paddingVertical: "7%" }}>
                                <View>
                                    {/* OutlinedTextInput for Email */}
                                    <OutlinedTextInput
                                        label="Amount"
                                        placeholder="Amount"
                                        value={values.amount}
                                        keyboardType="decimal-pad"
                                        onChangeText={handleChange('amount')}
                                        Left={() => <Feather name="dollar-sign" size={23} color={COLORS.primary_color} />}
                                    />
                                    {/* OutlinedTextInput for mobile number */}
                                    <OutlinedTextInput
                                        placeholder="Mobile"
                                        label="Mobile Number"
                                        keyboardType="decimal-pad"
                                        value={values.mobileNumber}
                                        onChangeText={handleChange('mobileNumber')}
                                        Left={() => <Feather name="phone-call" size={23} color={COLORS.primary_color} />}
                                    />
                                    {/* OutlinedTextInput for Password */}
                                    <OutlinedTextInput
                                        label="Account Pin Code"
                                        secureTextEntry
                                        placeholder="Account Pin Code"
                                        value={values.pin}
                                        keyboardType="decimal-pad"
                                        onChangeText={handleChange('pin')}
                                        Left={() => <MaterialCommunityIcons name="lock-outline" size={23} color={COLORS.primary_color} />}
                                    />
                                </View>
                                {/* Submit Button */}
                                <CustomBtn title="Deposit" onClickHandler={handleSubmit} activeIndicator={response.loading} />
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