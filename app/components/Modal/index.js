//
import React, { useState } from 'react';
import { COLORS } from '../../theme';
import { MaterialCommunityIcons, AntDesign } from 'react-native-vector-icons';
import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SIZES } from '../../constants';
//
const ResponseModal = ({ response, isVisible, modalToggle = () => { } }) => {
    //
    const onClose = () => {
        modalToggle(prev => !prev)
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
                        <MaterialCommunityIcons
                            size={39}
                            color={response?.isError ? "#fe2c55" : "green"}
                            name={response?.isError ? "checkbox-blank-off-outline" : "checkbox-marked-outline"}
                        />
                        <View style={{ rowGap: 2 }}>
                            <Text style={[SIZES.text_xl, { textAlign: "center", color: response?.isError ? "#fe2c55" : "green" }]}>
                                {response?.isError ? "Sorry!" : "Success"}
                            </Text>
                            <Text style={[SIZES.text_md, { textAlign: "center", color: COLORS.font_secondary }]}>
                                Are you sure you want to log out from
                                Are you sure you want to log out from this
                            </Text>
                        </View>
                    </View>
                </View>
                {/* buttons  */}
                <TouchableOpacity onPress={() => onClose()} activeOpacity={0.8} style={styles.removeBtn}>
                    <Text style={[SIZES.text_lg, { textAlign: "center", color: COLORS.primary_color }]}>
                        Ok
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Modal>
    )
}
//
export default ResponseModal;
//
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        rowGap: 20,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "rgba(31, 25, 25, 0.65)"
    },
    modalView: {
        width: "95%",
        borderRadius: 7,
        paddingVertical: "2%",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    formContainer: {
        rowGap: 10,
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
        padding: "3%",
        borderRadius: 7,
        marginBottom: "10%",
        backgroundColor: "#ffffff"
    },
    cancelBtn: {
        top: 5,
        right: 5,
        position: "absolute",
    }
});
//