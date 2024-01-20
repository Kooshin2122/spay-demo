//
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../../theme';
import { DepositHeader } from '../components';
//
const SendToQr = ({ route }) => {
    //
    const { depositName, depositDesc } = route?.params;
    //
    return (
        <SafeAreaView style={styles.conatainer}>
            <DepositHeader depositName={depositName} depositDesc={depositDesc} />
        </SafeAreaView>
    );
    //
}
//
export default SendToQr;
//
const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: COLORS.bg_primary
    }
});
//