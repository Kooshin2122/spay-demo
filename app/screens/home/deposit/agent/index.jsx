//
import React, { useState } from 'react';
import Header from '../components/Header';
import { COLORS } from '../../../../theme';
import { WithdrawInput } from '../components';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import OutlinedTextInput from '../../../../components/OutlinesTextInput';
import { SIZES } from '../../../../constants';
import CustomBtn from '../../../../components/CustomBtn';
import { ResponseModal } from '../../../../components';
//
const Agent = ({ route }) => {
    //
    const data = route?.params;
    const [amount, setAmount] = useState('');
    const [modal, setModal] = useState(false);
    const [response, setResponse] = useState({
        data: null,
        loading: false,
        errorMessage: '',
        isError: false,
    });
    //
    const modalToggle = () => setModal(prev => !prev);
    //
    const onPay = () => {
        modalToggle()
    }
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
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ paddingBottom: "5%", }}>
                        <Header
                            headerName={data?.name}
                            headerDesc={data?.desc}
                        />
                        <WithdrawInput
                            amount={amount}
                            setAmount={setAmount}
                        />
                        <CustomBtn
                            title="Debit / Credit"
                            activeIndicator={response?.loading}
                            onClickHandler={onPay}
                            style={{ marginTop: '15%', marginHorizontal: "5%" }}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
//
export default Agent;
//
const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: COLORS.bg_primary
    },
});
//