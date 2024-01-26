//
import React, { useState } from 'react';
import Header from '../components/Header';
import { COLORS } from '../../../../theme';
import { WithdrawInput } from '../components';
import { CustomBtn, ResponseModal } from '../../../../components';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
//
const Paypal = ({ route }) => {
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
                            title="Paypal"
                            activeIndicator={response?.loading}
                            onClickHandler={onPay}
                            style={{ marginTop: '15%', marginHorizontal: "5%" }}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
    //
}
//
export default Paypal;
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