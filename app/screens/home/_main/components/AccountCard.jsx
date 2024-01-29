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
            <View style={styles.cardCon}>
                <Text style={[SIZES.text_base, { fontFamily: 'poppins400', color: COLORS.gray_color }]}>
                    Your Balance
                </Text>
                <View style={[LAY_OUT.flex_row, { justifyContent: 'space-between' }]}>
                    <Pressable onPress={showBalance} style={[LAY_OUT.flex_row, { columnGap: 10 }]}>
                        <Text style={[SIZES.text_xl, { color: COLORS.bg_tertiary }]}>
                            $ {eyeToggle ? "12,417.98" : "***.***"}
                        </Text>
                        <MaterialCommunityIcons
                            size={23}
                            color={COLORS.bg_tertiary}
                            name={eyeToggle ? "eye-outline" : "eye-off-outline"}
                        />
                    </Pressable>
                    <View>
                        <Text style={[SIZES.text_base, { color: COLORS.gray_color, textAlign: 'right', fontFamily: 'poppins400' }]}>
                            Account no
                        </Text>
                        <Pressable onPress={showBalance} style={[LAY_OUT.flex_row, { columnGap: 4 }]}>
                            <Text style={[SIZES.text_base, { color: COLORS.bg_tertiary }]}>
                                2303040002
                            </Text>
                            <MaterialCommunityIcons
                                size={20}
                                name={"content-copy"}
                                color={COLORS.bg_tertiary}
                            />
                        </Pressable>
                    </View>
                </View>
            </View>
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
        backgroundColor: 'rgba(42, 45, 50, 0.15)'
    },
    section1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});
//