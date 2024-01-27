//
import React from 'react';
import { Formik } from 'formik';
import { COLORS } from '../../../theme';
import { SIZES } from '../../../constants';
import { AccountCard } from '../_main/components';
import { CustomBtn, OutlinedTextInput } from '../../../components';
import { AntDesign, MaterialCommunityIcons } from 'react-native-vector-icons';
import { KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
//
const TransferMoneyScreen = ({ route }) => {
    //
    const payload = { walletId: '', receiverName: '', amount: '', fee: '', description: '' };
    //
    const onSend = (values) => {
        console.log("values......", values);
    }
    //
    return (
        <SafeAreaView style={styles.conatainer}>
            <View style={styles.header}>
                <Pressable>
                    <AntDesign
                        size={23}
                        name="left"
                        color={COLORS.font_primary}
                    />
                </Pressable>
                <Text style={[SIZES.text_base]}>
                    Transfer Money
                </Text>
            </View>
            {/* scroll container */}
            <KeyboardAvoidingView
                keyboardVerticalOffset={15}
                behavior={Platform.OS == 'ios' ? 'padding' : null}
                style={{ flex: 1 }}
                enabled
            >
                <ScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollCon}
                >
                    {/* account card  */}
                    <AccountCard />
                    {/* Form container  */}
                    <Formik
                        onSubmit={onSend}
                        initialValues={payload}
                    >
                        {({ values, handleChange, handleSubmit, errors }) => (
                            <View style={{ rowGap: 30, paddingHorizontal: "3.5%", backgroundColor: "#ffffff" }}>
                                <View style={{ rowGap: 20 }}>
                                    <OutlinedTextInput
                                        label="wallet id"
                                        value={values.walletId}
                                        placeholder="Enter your wallet id"
                                        onChangeText={handleChange('walletId')}
                                        Left={() => <Text style={[SIZES.text_lg]}>🇸🇴</Text>}
                                    />
                                    <OutlinedTextInput
                                        editable={false}
                                        label="Receiver Name"
                                        placeholder="Receiver name"
                                        value={values.receiverName}
                                        onChangeText={handleChange('receiverName')}
                                        Left={() => <MaterialCommunityIcons name="account" size={20} color={COLORS.font_secondary} />}
                                    />
                                    <OutlinedTextInput
                                        label="Amount"
                                        placeholder="0.0"
                                        value={values.amount}
                                        keyboardType="decimal-pad"
                                        onChangeText={handleChange('amount')}
                                        Left={() => <MaterialCommunityIcons name="currency-usd" size={20} color={COLORS.font_secondary} />}
                                    />
                                    <OutlinedTextInput
                                        label="Fee"
                                        placeholder="0.0"
                                        value={values.fee}
                                        keyboardType="decimal-pad"
                                        onChangeText={handleChange('fee')}
                                        Left={() => <MaterialCommunityIcons name="currency-usd" size={20} color={COLORS.font_secondary} />}
                                    />
                                    <OutlinedTextInput
                                        label="Description"
                                        placeholder="(optional)"
                                        value={values.description}
                                        onChangeText={handleChange('description')}
                                    />
                                </View>
                                <CustomBtn
                                    title="Send"
                                    style={{ borderRadius: 5 }}
                                    onClickHandler={handleSubmit}
                                />
                            </View>
                        )}
                    </Formik>
                    {/* end  */}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
    //
}
//
export default TransferMoneyScreen;
//
const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: COLORS.bg_primary
    },
    header: {
        columnGap: 15,
        padding: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.7,
        borderColor: COLORS.gray_color
    },
    scrollCon: {
        rowGap: 20,
        padding: '3%',
    }
});
//