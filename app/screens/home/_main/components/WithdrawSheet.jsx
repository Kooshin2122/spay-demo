//
import React from 'react';
import { COLORS } from '../../../../theme';
import { useNavigation } from '@react-navigation/core';
import { LAY_OUT, SIZES } from '../../../../constants';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
//
const WithdrawSheet = ({ sheetRef }) => {
    //
    const onClose = () => {
        sheetRef?.current?.close();
    }
    //
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={[SIZES.text_lg, { color: COLORS.font_primary, textAlign: "center", textTransform: "capitalize" }]}>
                    Withdrawal
                </Text>
                <Text style={[SIZES.text_sm, { color: COLORS.font_secondary, textAlign: "center", fontFamily: "poppins400" }]}>
                    withdrawal money to different channels
                </Text>
            </View>
            {/* Deposit Cards */}
            <View style={{ rowGap: 10 }}>
                <Cards
                    name="MMT"
                    screenName="MMT"
                    desc="Withdrawal money to different phonepay"
                    image="data:image/png;base64,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"
                />
                <Cards
                    name="Paypal"
                    screenName="Paypal"
                    desc="Withdrawal money to your Paypal account"
                    image="https://static.vecteezy.com/system/resources/previews/020/190/502/original/paypal-logo-paypal-logo-free-free-vector.jpg"
                />
                <Cards
                    name="Agent"
                    screenName="Agent"
                    desc="Use your master or visa card to withdraw"
                    image="https://cdn3.vectorstock.com/i/1000x1000/88/22/qr-code-sample-for-smartphone-scanning-vector-12578822.jpg"
                />
            </View>
        </View>
    );
    //
};
//
export default WithdrawSheet;
//
const Cards = ({ name, desc, image, screenName }) => {
    //
    const { navigate } = useNavigation();
    //
    const onSelect = () => {
        navigate("WithdrawStack", {
            screen: screenName,
            params: { name, desc }
        });
    }
    //
    return (
        <Pressable onPress={onSelect} style={styles.depositCon}>
            <Image
                resizeMode="contain"
                source={{ uri: image }}
                style={{ width: 90, height: 60, borderWidth: 1, borderRadius: 5, borderColor: COLORS.tertiary_color }}
            />
            <View style={{ flex: 1 }}>
                <Text style={[SIZES.text_lg,]}>
                    {name}
                </Text>
                <Text style={[SIZES.text_sm, { color: COLORS.font_secondary, fontFamily: "poppins400" }]}>
                    {desc}
                </Text>
            </View>
        </Pressable>
    )
}
//
const styles = StyleSheet.create({
    container: {
        rowGap: 20,
        paddingHorizontal: "2%",
        paddingBottom: "5%",
    },
    header: {
        paddingBottom: "2%",
        borderBottomWidth: 0.7,
        borderColor: COLORS.gray_color
    },
    depositCon: {
        columnGap: 10,
        flexDirection: "row",
        alignItems: "center",
    }
});
//