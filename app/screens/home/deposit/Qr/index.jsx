//
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../../theme';
import { DepositHeader } from '../components';
//
const Qr = ({ route }) => {
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
export default Qr;
//
const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: COLORS.bg_primary
    }
});
//