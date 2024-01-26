//
import React from 'react';
import { COLORS } from '../../../theme';
import { SIZES } from '../../../constants';
import { welcomeImg } from '../../../assets/Auth';
import { useNavigation } from '@react-navigation/core';
import { AuthBg, CustomBtn } from '../../../components';
import { Image, SafeAreaView, StyleSheet, Text, View, } from 'react-native';
//
const WelcomeScreen = () => {
    //
    const { navigate } = useNavigation();
    //
    return (
        <SafeAreaView style={styles.mainContainer}>
            <AuthBg style={{ rowGap: 40, justifyContent: "space-around" }}>
                {/* image and content container */}
                <View style={{ rowGap: 10, }}>
                    <Image
                        source={welcomeImg}
                        style={{ alignSelf: "center", marginTop: "10%" }}
                    />
                    <Text style={[SIZES.text_4xl, { color: COLORS.primary_color, textAlign: "center", width: "50%", alignSelf: "center" }]}>
                        Welcome to
                        Shabel Wallet
                    </Text>
                    <Text style={[SIZES.text_lg, { textAlign: "center", width: "80%", alignSelf: "center", fontFamily: "poppins400", color: COLORS.font_secondary }]}>
                        Create an account if you not having existing an account
                    </Text>
                </View>
                {/* buttons container */}
                <View style={{ rowGap: 20, paddingHorizontal: "3.5%" }}>
                    <CustomBtn
                        title="Login"
                        style={{ borderRadius: 50 }}
                        onClickHandler={() => navigate('LoginStack')}
                    />
                    <View style={styles.dashedCon}>
                        <View style={{ flex: 1, borderWidth: 0.5, borderColor: COLORS.gray_color }} />
                        <Text style={[SIZES.text_base, { fontFamily: "poppins400", color: COLORS.font_secondary }]}>
                            or
                        </Text>
                        <View style={{ flex: 1, borderWidth: 0.5, borderColor: COLORS.gray_color }} />
                    </View>
                    <CustomBtn
                        mode="outlined"
                        title="register"
                        style={{ borderRadius: 50 }}
                        color={COLORS.primary_color}
                        onClickHandler={() => navigate('SignUpStack')}
                    />
                </View>
            </AuthBg>
        </SafeAreaView>
    )
}
//
export default WelcomeScreen;
//
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.bg_primary
    },
    dashedCon: {
        columnGap: 5,
        flexDirection: "row",
        alignItems: "center",
    }
});
//