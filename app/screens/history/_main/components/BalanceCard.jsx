//
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { masterCardBg, masterCardLogo } from '../../../../assets/home';
import { SIZES } from '../../../../constants';
import { COLORS } from '../../../../theme';
//
const BalanceCard = () => {
    //
    return (
        <ImageBackground
            source={masterCardBg}
            style={[styles.container]}
        >
            <View style={styles.cardCon}>
                <Text style={[SIZES.text_base, { textAlign: 'center', color: COLORS.gray_color, fontFamily: 'poppins400' }]}>
                    Last Balance
                </Text>
                <Text style={[SIZES.text_2xl, { textAlign: 'center', color: COLORS.bg_primary, fontFamily: 'poppins500' }]}>
                    $ 12.50
                </Text>
                <Text style={[SIZES.text_base, { textAlign: 'center', color: COLORS.gray_color, fontFamily: 'poppins400' }]}>
                    from 21 Jun 2023 to 27 Jan 2024
                </Text>
            </View>
        </ImageBackground>
    );
    //
};
//
export default BalanceCard;
//
const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: 'rgba(7, 120, 60, 0.59)'
    },
    cardCon: {
        rowGap: 7,
        padding: "3%",
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: 'rgba(7, 120, 60, 0.59)'
    },
});
//