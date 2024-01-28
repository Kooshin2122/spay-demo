//
import React, { useState } from 'react';
import { COLORS } from '../../../../theme';
import { logo } from '../../../../assets/_main';
import { LAY_OUT, SIZES } from '../../../../constants';
import { masterCardBg, masterCardLogo, bg } from '../../../../assets/home';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
//
const AccountCard = () => {
    //
    const [eyeToggle, setEyeToggle] = useState(false);
    //
    const showBalance = () => {
        setEyeToggle(prev => !prev)
    }
    //
    return (
        <ImageBackground
            source={bg}
            style={styles.container}
        >
            {/* <View style={styles.cardCon}>

                </View> */}
        </ImageBackground>
    );
    //
};
//
export default AccountCard;
//
const styles = StyleSheet.create({
    container: {
        height: 110,
        width: "100%",
        borderRadius: 1,
        backgroundColor: "#fff",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 1


    },
    cardCon: {
        padding: "3%",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        backgroundColor: 'rgba(7, 120, 60, 0.39)'
    },
    section1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});
//