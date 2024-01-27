//
import React, { useState } from 'react';
import { COLORS } from '../../../../theme';
import { LAY_OUT, SIZES } from '../../../../constants';
import { Pressable, FlatList, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header, WithdrawInput } from '../components';
import { services } from '../components/services';
import OutlinedTextInput from '../../../../components/OutlinesTextInput';
import { Feather, MaterialCommunityIcons } from 'react-native-vector-icons';
import CustomBtn from '../../../../components/CustomBtn';
import { ResponseModal } from '../../../../components';
import { POST_AUTH_RAW_DATA } from '../../../../API';
//
const Evc = ({ route }) => {
    //
    const data = route?.params;
    const [amount, setAmount] = useState('');
    const [modal, setModal] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState('Evc-plus');
    const [response, setResponse] = useState({
        data: null,
        loading: false,
        errorMessage: '',
        isError: false,
    });
    //
    const modalToggle = () => {
        setModal(prev => !prev)
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
                        <FlatList
                            data={services}
                            scrollEnabled={false}
                            keyExtractor={item => item.id}
                            contentContainerStyle={styles.paymentCardsCon}
                            renderItem={({ item }) => <PaymentCards {...item} amount={amount} expand={selectedPayment == item.name ? true : false} changeSelectPayment={setSelectedPayment} modalToggle={modalToggle} response={response} setResponse={setResponse} />}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
    //
}
//
export default Evc;
//
const noop = () => { }
//
const PaymentCards = ({ id, name, companyName, logo, amount, expand = false, response, changeSelectPayment = noop, modalToggle = noop, setResponse = noop }) => {
    //
    const [number, setNumber] = useState('');
    const [modal, setModal] = useState(false);
    //
    const onChangeText = (inputValue) => {
        setNumber(inputValue);
    }
    // Click on cards
    const onSelectPayment = () => {
        changeSelectPayment(name)
    }
    //
    const onSend = async () => {
        const payload = { number, amount }
        console.log("payload.........", payload);
        modalToggle()
    }
    //
    return (
        <View style={styles.cardCon}>
            <Pressable onPress={onSelectPayment} style={styles.section1}>
                <View style={[LAY_OUT.flex_row, { columnGap: 7, flex: 1, }]}>
                    <Image
                        source={logo}
                        resizeMode="cover"
                        style={{ width: 110, height: 55, borderRadius: 7 }}
                    />
                    <Text style={[SIZES.text_lg]}>
                        {name}
                        <Text style={[SIZES.text_base, { color: COLORS.font_secondary, fontFamily: 'poppins400' }]}>
                            ({companyName})
                        </Text>
                    </Text>
                </View>
                <MaterialCommunityIcons
                    size={23}
                    color={expand ? COLORS.primary_color : COLORS.gray_color}
                    name={expand ? "checkbox-multiple-marked-outline" : "checkbox-multiple-blank-outline"}
                />
            </Pressable>
            <View style={{ rowGap: 15, display: expand ? "flex" : "none" }}>
                <OutlinedTextInput
                    label="Mobile Number"
                    value={number}
                    placeholder="XX XXX XXX"
                    keyboardType="decimal-pad"
                    onChangeText={onChangeText}
                    Left={() => <Text style={[SIZES.text_base, { color: COLORS.primary_color }]}>(252)</Text>}
                />
                <CustomBtn
                    title="Send"
                    onClickHandler={onSend}
                    style={{ borderRadius: 50 }}
                    activeIndicator={response?.loading}
                />
            </View>
        </View>
    );
    //
};
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
    paymentCardsCon: {
        rowGap: 15,
        width: "100%",
        padding: "3.5%",
    },
    cardCon: {
        rowGap: 15,
        width: "100%",
        padding: '3%',
        borderRadius: 5,
        borderWidth: 0.6,
        borderColor: COLORS.gray_color
    },
    section1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});
//