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
    const [agentId, setAgentId] = useState('');
    const [agentName, setAgentName] = useState('');
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
    const onChangeAgentId = (inputValue) => setAgentId(inputValue);
    const onChangeAgentName = (inputValue) => setAgentName(inputValue);
    //
    const onSend = () => {
        modalToggle()
        const payload = { amount, agentId, agentName }
        console.log("payload...........", payload);
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
                    <View style={{ rowGap: 15, paddingBottom: "5%" }}>
                        <Header
                            headerName={data?.name}
                            headerDesc={data?.desc}
                        />
                        <WithdrawInput
                            amount={amount}
                            setAmount={setAmount}
                        />
                        <View style={{ rowGap: 20, padding: "3.5%", }}>
                            <OutlinedTextInput
                                label="Agent id"
                                value={agentId}
                                placeholder="00 00 00 00 00"
                                keyboardType="decimal-pad"
                                onChangeText={onChangeAgentId}
                                Left={() => <Text style={[SIZES.text_base, { color: COLORS.primary_color }]}>SWB</Text>}
                            />
                            <OutlinedTextInput
                                label="Agent id"
                                value={agentName}
                                placeholder="John smith"
                                onChangeText={onChangeAgentName}
                            />
                            <CustomBtn
                                title="Send"
                                style={{ marginTop: '5%' }}
                                onClickHandler={onSend}
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
export default Agent;
//
const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: COLORS.bg_primary
    },
});
//