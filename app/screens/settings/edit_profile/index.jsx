//
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { CustomBtn, ImageViewer, OutlinedTextInput } from '../../../components';
import { SIZES } from '../../../constants';
import { COLORS } from '../../../theme';
import { Formik } from 'formik';
//
const EditProfileScreen = () => {
    //
    const { navigate, goBack } = useNavigation();
    const [selectedImage, setSelectedImage] = useState(null);
    //
    const userData = { name: '', tell: '', email: '' };
    //
    // const pickImageAsync = async () => {
    //     //
    //     let result = await ImagePickers.launchImageLibraryAsync({
    //         mediaTypes: ImagePickers.MediaTypeOptions.Images,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //     });
    //     if (!result.canceled) {
    //         console.log('------', result.assets[0].uri);
    //         setSelectedImage(result.assets[0].uri);
    //     } else {
    //         alert('You did not select any image.');
    //     }
    // };
    //
    const onSaveData = (values) => {
        console.log(values);
    }
    //
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
            />
            <View style={styles.header}>
                <Pressable onPress={goBack} >
                    <Text style={[SIZES.text_base, { color: COLORS.primary_color, fontFamily: "poppins600" }]}>
                        Cancel
                    </Text>
                </Pressable>
                <Text style={[SIZES.text_lg, { color: COLORS.secondary_color, fontFamily: "poppins500" }]}>
                    Edit Profile
                </Text>
                <Pressable >
                    <Text style={[SIZES.text_base, { color: "#f43f5f", fontFamily: "poppins600" }]}>
                        Save
                    </Text>
                </Pressable>
            </View>
            <KeyboardAvoidingView
                keyboardVerticalOffset={15}
                behavior={Platform.OS == 'ios' ? 'padding' : null}
                style={{ flex: 1 }}
                enabled
            >
                <ScrollView style={{ flex: 1 }} >
                    {/* Body */}
                    <View style={styles.body}>
                        {/* profile container */}
                        <View style={styles.profileCon}>
                            <ImageViewer
                                image={selectedImage}
                                style={styles.imageCon}
                            // onSelectImage={pickImageAsync}
                            />
                        </View>
                        {/* form container */}
                        <View style={{ flex: 1, rowGap: 10 }}>
                            <Text style={[SIZES.text_base]}>
                                Personal Info
                            </Text>
                            <Formik
                                onSubmit={onSaveData}
                                initialValues={userData}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
                                    return (
                                        <View style={styles.formContainer}>
                                            <OutlinedTextInput
                                                label="Full Name"
                                                value={values.name}
                                                // keyboardType="numeric"
                                                placeholder="Enter Your Name"
                                                onChangeText={handleChange("name")}
                                            />
                                            <OutlinedTextInput
                                                label="Email"
                                                value={values.email}
                                                // keyboardType="numeric"
                                                placeholder="Enter Your Email"
                                                onChangeText={handleChange("email")}
                                                Left={() => <Text style={[SIZES.text_lg]} >📧</Text>}
                                            />
                                            <OutlinedTextInput
                                                label="Mobile number"
                                                value={values.tell}
                                                keyboardType="numeric"
                                                onChangeText={handleChange("tell")}
                                                placeholder="Enter your mobile number"
                                                Left={() => <Text style={[SIZES.text_lg]} >🇸🇴</Text>}
                                            />
                                            <CustomBtn
                                                title="save"
                                                onClickHandler={handleSubmit}
                                            />
                                        </View>
                                    )
                                }}
                            </Formik>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            {/* end */}
        </SafeAreaView>
    )
    //
}
//
export default EditProfileScreen;
//
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg_primary
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4.5%",
        marginBottom: "2.5%",
        borderBottomWidth: 0.7,
        borderColor: COLORS.gray_color
    },
    body: {
        rowGap: 15,
        paddingHorizontal: '3.5%'
    },
    profileCon: {
        alignItems: "center"
    },
    formContainer: {
        rowGap: 20
    },
    imageCon: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: COLORS.primary_color,
        shadowColor: "#000000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 3,
        backgroundColor: COLORS.bg_primary,
    },
});
//