//
import React from 'react';
import { Formik } from 'formik';
import { COLORS } from '../../../../theme';
import { SIZES } from '../../../../constants';
import { otpImg } from '../../../../assets/Auth';
import { useNavigation } from '@react-navigation/core';
import { MaterialIcons } from 'react-native-vector-icons';
import { AuthBg, CustomBtn, OutlinedTextInput } from '../../../../components';
import { Dimensions, Image, KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native';
//
const VerificationScreen = () => {
    //
    const { navigate } = useNavigation();
    //
    const payload = { mobileNumber: '', email: '' }
    //
    const onVerify = (values) => {
        console.log('values........', values);
        navigate("CreatePassword")
    }
    //
    return (
        <SafeAreaView style={styles.mainContainer}>
            <KeyboardAvoidingView
                keyboardVerticalOffset={15}
                behavior={Platform.OS == 'ios' ? 'padding' : null}
                style={{ flex: 1 }}
                enabled
            >
                <AuthBg style={{ flex: 1 }}>
                    <ScrollView style={{ flex: 1, }} contentContainerStyle={{ rowGap: 40 }}>
                        {/* image and content container */}
                        <View style={{ rowGap: 10, zIndex: -1 }}>
                            <Image
                                source={otpImg}
                                style={{ alignSelf: "center", marginTop: "10%" }}
                            />
                            <Text style={[SIZES.text_4xl, { color: COLORS.primary_color, textAlign: "center", width: "50%", alignSelf: "center" }]}>
                                Verify OTP
                             </Text>
                        </View>
                        {/* form container */}
                        <Formik
                            onSubmit={onVerify}
                            initialValues={payload}
                        >
                            {({ values, handleChange, handleSubmit, errors }) => (
                                <View style={{ rowGap: 30, paddingHorizontal: "3.5%", backgroundColor: "#ffffff" }}>
                                    <View style={{ rowGap: 20 }}>
                                        <OutlinedTextInput
                                            label="Mobile number otp sent to +252615***496"
                                            value={values.mobileNumber}
                                            onChangeText={handleChange('mobileNumber')}
                                            placeholder="Enter The Otp here..."
                                            keyboardType="decimal-pad"
                                        />
                                        <OutlinedTextInput
                                            label="Email otp sent to abdirahman******29@gmail.com"
                                            value={values.email}
                                            keyboardType="decimal-pad"
                                            placeholder="Enter The Otp here..."
                                            onChangeText={handleChange('email')}
                                        />
                                    </View>
                                    <View style={{ rowGap: 15 }}>
                                        <CustomBtn
                                            title="Verify"
                                            style={{ borderRadius: 50 }}
                                            onClickHandler={handleSubmit}
                                        />
                                        <Text style={[SIZES.text_base, { textAlign: "center", alignSelf: "center", fontFamily: "poppins400", color: COLORS.font_secondary }]}>
                                            already have an account {' '}
                                            <Text onPress={() => navigate('LoginStack')} style={{ color: COLORS.primary_color, textDecorationLine: 'underline' }}>
                                                login
                                            </Text>
                                        </Text>
                                    </View>
                                </View>
                            )}
                        </Formik>
                    </ScrollView>
                </AuthBg>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
//
export default VerificationScreen;
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