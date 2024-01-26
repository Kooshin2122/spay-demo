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
const CreatePasswordScreen = () => {
    //
    const { navigate } = useNavigation();
    //
    const payload = { mobileNumber: '', password: '', confirm: '' }
    //
    const onDone = (values) => {
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
                                source={passwordImg}
                                style={{ alignSelf: "center", marginTop: "10%" }}
                            />
                            <Text style={[SIZES.text_4xl, { color: COLORS.primary_color, textAlign: "center", width: "50%", alignSelf: "center" }]}>
                                Create Password
                             </Text>
                        </View>
                        {/* form container */}
                        <Formik
                            onSubmit={onDone}
                            initialValues={payload}
                        >
                            {({ values, handleChange, handleSubmit, errors }) => (
                                <View style={{ rowGap: 30, paddingHorizontal: "3.5%", backgroundColor: "#ffffff" }}>
                                    <View style={{ rowGap: 20 }}>
                                        <OutlinedTextInput
                                            secureTextEntry
                                            label="New Password"
                                            value={values.password}
                                            placeholder="***********"
                                            onChangeText={handleChange('password')}
                                            Left={() => <Feather name="unlock" size={23} color={COLORS.primary_color} />}
                                        />
                                        <OutlinedTextInput
                                            label="Confirm Password"
                                            value={values.confirm}
                                            placeholder="***********"
                                            onChangeText={handleChange('confirm')}
                                            Left={() => <Feather name="unlock" size={23} color={COLORS.primary_color} />}
                                        />
                                    </View>
                                    <View style={{ rowGap: 15 }}>
                                        <CustomBtn
                                            title="Done"
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
export default CreatePasswordScreen;
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