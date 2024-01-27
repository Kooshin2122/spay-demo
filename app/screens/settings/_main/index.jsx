//
import React, { useState } from 'react';
import { COLORS } from '../../../theme';
import { LogoutModal, SettingCards, SettingHeader } from './components';
import { StyleSheet, Text, View, ScrollView, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Feather, AntDesign, MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons';
import { GorhomBottomSheet } from '../../../components';
import { useNavigation } from '@react-navigation/core';
//
const { height } = Dimensions.get("screen");
//
const AccountSettingScreen = () => {
    //
    const { navigate } = useNavigation()
    //
    const [settingToggles, setSettingToggles] = useState({
        editProfile: false,
        signOutToggle: false
    });
    //
    return (
        <View style={styles.container}>
            {/* header */}
            <SettingHeader />
            {/* scroll view */}
            <ScrollView contentContainerStyle={{ rowGap: 20 }} >
                <SettingCards
                    label="Edit Profile"
                    onClick={() => navigate('EditProfile')}
                    RightIcon={() => <Feather name="edit" size={29} color={COLORS.primary_color} />}
                    LeftIcon={() => <AntDesign name="right" size={23} color={COLORS.gray_color} />}
                />
                <SettingCards
                    label="Privacy & policy"
                    onClick={() => navigate('PrivacyPolicy')}
                    RightIcon={() => <MaterialIcons name="privacy-tip" size={29} color={COLORS.primary_color} />}
                    LeftIcon={() => <AntDesign name="right" size={23} color={COLORS.gray_color} />}
                />
                <SettingCards
                    label="Terms & conditions"
                    onClick={() => navigate('TermsAndConditions')}
                    RightIcon={() => <MaterialCommunityIcons name="sticker-text-outline" size={29} color={COLORS.primary_color} />}
                    LeftIcon={() => <AntDesign name="right" size={23} color={COLORS.gray_color} />}
                />
                <SettingCards
                    label="Sign-out"
                    onClick={prev => (setSettingToggles({ ...prev, signOutToggle: true }))}
                    RightIcon={() => <Feather name="log-out" size={29} color="#f43f5f" />}
                    LeftIcon={() => <AntDesign name="right" size={23} color={COLORS.gray_color} />}
                />

            </ScrollView>
            {/* settingToggles */}
            {
                settingToggles.signOutToggle ?
                    <LogoutModal
                        setSettingToggles={setSettingToggles}
                    />
                    : null
            }
            {/* {
                settingToggles.editProfile ?
                    <View style={[styles.bottomsheetCon, { height: height }]}>
                        <KeyboardAvoidingView
                            keyboardVerticalOffset={15}
                            behavior={Platform.OS == 'ios' ? 'padding' : null}
                            style={{ flex: 1 }}
                            enabled
                        >
                            <GorhomBottomSheet snapPoints={["90%"]}>
                                <EditProfile settingToggles={settingToggles} setSettingToggles={setSettingToggles} />
                            </GorhomBottomSheet>
                        </KeyboardAvoidingView>
                    </View>
                    : null
            } */}
            {/* end */}
        </View>
    )
    //
}
//
export default AccountSettingScreen;
//
const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 20,
        backgroundColor: COLORS.bg_primary
    },
    bottomsheetCon: {
        top: 0,
        width: "100%",
        position: "absolute",
        backgroundColor: "rgba(31, 25, 25, 0.38)"
    }
});
//