//
import React, { useState } from 'react';
import { COLORS } from '../../../../theme';
import { logo } from '../../../../assets/_main';
import { LAY_OUT, SIZES } from '../../../../constants';
import { masterCardBg, masterCardLogo } from '../../../../assets/home';
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
        <View style={styles.container}>
            <ImageBackground
                source={masterCardBg}
                style={{ width: "100%", height: "100%" }}
            >
                <View style={styles.cardCon}>
                    {/* balance and logo container */}
                    <View style={styles.section1}>
                        <View>
                            <Text style={[SIZES.text_base, { color: COLORS.gray_color, fontFamily: 'poppins400' }]}>
                                Card Balance
                            </Text>
                            <Pressable onPress={showBalance} style={[LAY_OUT.flex_row, { columnGap: 10 }]}>
                                <MaterialCommunityIcons
                                    size={23}
                                    color={COLORS.bg_tertiary}
                                    name={eyeToggle ? "eye-outline" : "eye-off-outline"}
                                />
                                <Text style={[SIZES.text_xl, { color: COLORS.bg_tertiary }]}>
                                    $ {eyeToggle ? "30,000" : "**.***"}
                                </Text>
                            </Pressable>
                        </View>
                        <Image
                            source={logo}
                            style={{ width: 60, height: 40 }}
                        />
                    </View>
                    {/* account number & person name container */}
                    <View style={{ rowGap: 5 }}>
                        <View style={[LAY_OUT.flex_row, { columnGap: 25 }]}>
                            <Text style={[SIZES.text_xl, { color: COLORS.gray_color, letterSpacing: 0.7 }]}>
                                0241
                            </Text>
                            <Text style={[SIZES.text_xl, { color: COLORS.gray_color, letterSpacing: 0.7 }]}>
                                ****
                            </Text>
                            <Text style={[SIZES.text_xl, { color: COLORS.gray_color, letterSpacing: 0.7 }]}>
                                ****
                            </Text>
                            <Text style={[SIZES.text_xl, { color: COLORS.gray_color, letterSpacing: 0.7 }]}>
                                2385
                            </Text>
                        </View>
                        <Text style={[SIZES.text_xl, { color: COLORS.bg_tertiary, fontFamily: 'poppins400' }]}>
                            Abdirahman Abdirashid Ahmed
                        </Text>
                    </View>
                    {/* expired date & master card logo container */}
                    <View style={styles.section1}>
                        <View>
                            <Text style={[SIZES.text_base, { color: COLORS.gray_color, fontFamily: 'poppins400' }]}>
                                Debit
                            </Text>
                            <View style={[LAY_OUT.flex_row, { columnGap: 10 }]}>
                                <Text style={[SIZES.text_xl, { color: COLORS.gray_color }]}>
                                    02-20
                                </Text>
                                <Text style={[SIZES.text_xl, { color: COLORS.gray_color }]}>
                                    02-23
                                </Text>
                            </View>
                        </View>
                        <Image
                            source={masterCardLogo}
                            style={{ width: 60, height: 40 }}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
    //
};
//
export default AccountCard;
//
const styles = StyleSheet.create({
    container: {
        height: 200,
        width: "100%",
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#012b5b"
    },
    cardCon: {
        padding: "3%",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        backgroundColor: 'rgba(7, 120, 60, 0.59)'
    },
    section1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});
//