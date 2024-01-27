//
import React, { useState } from 'react';
import { COLORS } from '../../../../theme';
import { Feather, AntDesign } from 'react-native-vector-icons';
import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SIZES } from '../../../../constants';
//
const LogoutModal = ({ isVisible, setSettingToggles = () => { } }) => {
    //
    const onClose = () => {
        setSettingToggles(prev => ({ ...prev, signOutToggle: false }))
    }
    const onLogOut = () => {
        // close 
        onClose();
    }
    //
    return (
        <Modal
            animationType="fade"
            visible={isVisible}
            transparent={true}
        >
            <SafeAreaView style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.formContainer}>
                        <Feather name="log-out" size={29} color="#fe2c55" />
                        <TouchableOpacity onPress={() => onClose()} activeOpacity={0.8} style={styles.cancelBtn}>
                            <AntDesign name="close" size={23} color={COLORS.font_secondary} />
                        </TouchableOpacity>
                        <Text style={[SIZES.text_base]}>
                            Sign-out or Remove account
                        </Text>
                        <Text style={[SIZES.text_md, { textAlign: "center" }]}>
                            Are you sure you want to log out from this "APP"?
                        </Text>
                    </View>
                    <TouchableOpacity onPress={onLogOut} activeOpacity={0.8} style={styles.saveBtn}>
                        <Text style={[SIZES.text_base, { textAlign: "center", color: "#fe2c55" }]}>
                            Log-out
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* buttons  */}
                <TouchableOpacity onPress={() => onClose()} activeOpacity={0.8} style={styles.removeBtn}>
                    <Text style={[SIZES.text_base, { textAlign: "center", color: "#fe2c55" }]}>
                        remove account
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Modal>
    )
}
//
export default LogoutModal;
//
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        rowGap: 20,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "rgba(68, 68, 68, 0.6)"
    },
    modalView: {
        width: "95%",
        borderRadius: 7,
        paddingTop: "2%",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    formContainer: {
        rowGap: 12,
        padding: "4%",
        alignItems: "center"
    },
    saveBtn: {
        width: "100%",
        padding: "4%",
        borderTopWidth: 0.7,
        borderColor: COLORS.gray_color
    },
    removeBtn: {
        width: "95%",
        padding: "4%",
        borderRadius: 7,
        backgroundColor: "#ffffff"
    },
    cancelBtn: {
        top: 5,
        right: 5,
        position: "absolute",
    }
});
//