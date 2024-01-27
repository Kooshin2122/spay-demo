//
import React, { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { LAY_OUT, SIZES } from '../../../../constants';
import { COLORS } from '../../../../theme';
import { services } from './services';
import OutlinedTextInput from '../../../../components/OutlinesTextInput';
import { Feather, MaterialCommunityIcons } from 'react-native-vector-icons';
import CustomBtn from '../../../../components/CustomBtn';
//
const WithdrawInput = ({ amount, setAmount, }) => {
    //
    const onChangeText = (inputValue) => {
        setAmount(inputValue);
    }
    //
    return (
        <View style={styles.container}>
            <Text style={[SIZES.text_xl, { color: COLORS.primary_color, textAlign: 'center' }]}>
                USD
            </Text>
            <TextInput
                value={amount}
                placeholder="0.00"
                style={styles.input}
                keyboardType="numeric"
                onChangeText={onChangeText}
                placeholderTextColor={COLORS.font_primary}
            />
            <Text style={[SIZES.text_sm, { color: COLORS.font_secondary, fontFamily: 'poppins400', textAlign: "center" }]}>
                your balance will be 23.00 dollar
            </Text>
        </View>
    );
};
//
export default WithdrawInput;
//
const styles = StyleSheet.create({
    container: {
        rowGap: 10,
    },
    input: {
        height: 40,
        width: "50%",
        fontSize: 30,
        letterSpacing: 0.7,
        textAlign: "center",
        alignSelf: "center",
        fontFamily: "poppins500",
        color: COLORS.font_primary,
    },
    counter: {
        padding: "3%",
        borderRadius: 50,
        backgroundColor: COLORS.primary_color
    },
});
//