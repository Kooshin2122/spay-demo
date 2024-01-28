//
import React from 'react';
import { COLORS } from '../../../theme';
import QRCode from 'react-native-qrcode-svg';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
//
const CardsScreen = () => {
    //
    const dataToEncode = 'https://example.com'; // Replace with your data
    //
    return (
        <SafeAreaView style={styles.container}>
            <QRCode
                value={dataToEncode}
                size={200}
                color="black"
                backgroundColor="white"
            />
        </SafeAreaView>
    );
    //
};
//
export default CardsScreen;
//
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.bg_primary
    }
});
//