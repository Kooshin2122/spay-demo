//
import React from 'react';
import { Formik } from 'formik';
import { COLORS } from '../../../../theme';
import { SIZES } from '../../../../constants';
import { loginImg } from '../../../../assets/Auth';
import { Feather } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/core';
import { AuthBg, CustomBtn, OutlinedTextInput } from '../../../../components';
import { Dimensions, Image, KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native';
//
const LoginScreen = () => {
    //
    const { navigate } = useNavigation();
    //
    const payload = { mobileNumber: '', password: '' }
    //
    const onLogin = (values) => {
        console.log('values........', values);
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
                        <View style={{ rowGap: 10 }}>
                            <Image
                                source={loginImg}
                                style={{ alignSelf: "center", marginTop: "10%" }}
                            />
                            <Text style={[SIZES.text_4xl, { color: COLORS.primary_color, textAlign: "center", width: "50%", alignSelf: "center" }]}>
                                Login
                             </Text>
                            <Text style={[SIZES.text_base, { textAlign: "center", width: "80%", alignSelf: "center", fontFamily: "poppins400", color: COLORS.font_secondary }]}>
                                Welcome back, login if you have an account or {''}
                                <Text onPress={() => navigate('SignUpStack')} style={{ color: COLORS.primary_color, textDecorationLine: 'underline' }}>
                                    create new one
                                </Text>
                            </Text>
                        </View>
                        {/* form container */}
                        <Formik
                            onSubmit={onLogin}
                            initialValues={payload}
                        >
                            {({ values, handleChange, handleSubmit, errors }) => (
                                <View style={{ rowGap: 30, paddingHorizontal: "3.5%", backgroundColor: "#ffffff" }}>
                                    <View style={{ rowGap: 20 }}>
                                        <OutlinedTextInput
                                            label="Mobile Number"
                                            value={values.mobileNumber}
                                            onChangeText={handleChange('mobileNumber')}
                                            placeholder="XX XXX XXX"
                                            keyboardType="decimal-pad"
                                            Left={() => <Text style={[SIZES.text_base, { color: COLORS.primary_color }]}>(252)</Text>}
                                        />
                                        <OutlinedTextInput
                                            secureTextEntry
                                            label="Password"
                                            value={values.password}
                                            placeholder="Password"
                                            onChangeText={handleChange('password')}
                                            Left={() => <Feather name="unlock" size={23} color={COLORS.primary_color} />}
                                        />
                                        <Text onPress={() => navigate('ForgotPassword')} style={[SIZES.text_base, { textAlign: 'right', fontFamily: "poppins500", color: COLORS.primary_color, textDecorationLine: 'underline' }]}>
                                            Forgot Password
                                        </Text>
                                    </View>
                                    <View style={{ rowGap: 15 }}>
                                        <CustomBtn
                                            title="Login"
                                            style={{ borderRadius: 50 }}
                                            onClickHandler={handleSubmit}
                                        />
                                        <Text style={[SIZES.text_base, { textAlign: "center", alignSelf: "center", fontFamily: "poppins400", color: COLORS.font_secondary }]}>
                                            Don`t have an account {' '}
                                            <Text onPress={() => navigate('SignUpStack')} style={{ color: COLORS.primary_color, textDecorationLine: 'underline' }}>
                                                create new one
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
export default LoginScreen;
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