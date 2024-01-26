//
import React from 'react';
import { Formik } from 'formik';
import { COLORS } from '../../../../theme';
import { SIZES } from '../../../../constants';
import { passwordImg } from '../../../../assets/Auth';
import { Feather } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/core';
import { AuthBg, CustomBtn, OutlinedTextInput } from '../../../../components';
import { Dimensions, Image, KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native';
//
const ForgotPasswordScreen = () => {
    //
    const { navigate } = useNavigation();
    //
    const payload = { mobileNumber: '' }
    //
    const onNext = (values) => {
        console.log('values........', values);
        navigate('Verify')
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
                                source={passwordImg}
                                style={{ alignSelf: "center", marginTop: "10%" }}
                            />
                            <Text style={[SIZES.text_4xl, { color: COLORS.primary_color, textAlign: "center", width: "50%", alignSelf: "center" }]}>
                                Forgot Password
                             </Text>
                        </View>
                        {/* form container */}
                        <Formik
                            onSubmit={onNext}
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
                                    </View>
                                    <View style={{ rowGap: 15 }}>
                                        <CustomBtn
                                            title="Next"
                                            style={{ borderRadius: 50 }}
                                            onClickHandler={handleSubmit}
                                        />
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
export default ForgotPasswordScreen;
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