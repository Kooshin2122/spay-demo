//
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { masterCardBg, masterCardLogo } from '../../../../assets/home';
import { SIZES } from '../../../../constants';
import { COLORS } from '../../../../theme';
//
const StatusCard = ({ amount, label, bgColor = '' }) => {
    //
    return (
        <View style={styles.container}>
            <ImageBackground
                source={masterCardBg}
                style={{ width: '100%' }}
            >
                <View style={[styles.cardCon, { backgroundColor: bgColor }]}>
                    <Text style={[SIZES.text_2xl, { textAlign: 'center', color: COLORS.bg_primary, fontFamily: 'poppins500' }]}>
                        $ {amount}
                    </Text>
                    <Text style={[SIZES.text_base, { textAlign: 'center', color: COLORS.gray_color, fontFamily: 'poppins400' }]}>
                        {label}
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
    //
};
//
export default StatusCard;
//
const styles = StyleSheet.create({
    container: {
        width: "48%",
        minHeight: 5,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: 'rgba(7, 120, 60, 0.59)'
    },
    cardCon: {
        flex: 1,
        rowGap: 5,
        padding: "5%",
        justifyContent: "space-between",
        backgroundColor: 'rgba(7, 120, 60, 0.59)'
    },
});
//