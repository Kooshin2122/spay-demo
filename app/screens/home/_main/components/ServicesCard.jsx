//
import React from 'react';
import { COLORS } from '../../../../theme';
import img from '../../../../assets/send.png';
import { useNavigation } from '@react-navigation/core';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
//
const { width } = Dimensions.get('screen');
//
const ServicesCard = ({ label, image, sheetRef, Icon = () => { }, onNavigate = () => { } }) => {
    //
    const { navigate } = useNavigation();
    //
    const onClickService = () => {
        onNavigate();
        sheetRef?.current?.expand();
    }
    //
    return (
        <Pressable onPress={onClickService} style={styles.container}>
            <View style={styles.imageCon}>
                <Icon />
            </View>
            <Text numberOfLines={2} style={styles.label}>
                {label}
            </Text>
        </Pressable>
    );
    //
};
//
export default ServicesCard;
//
const styles = StyleSheet.create({
    container: {
        rowGap: 5.5,
        width: "17%",
        alignItems: "center",
    },
    imageCon: {
        width: "100%",
        borderRadius: 7,
        height: width / 6,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#fff",
        // shadowColor: "#000000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.17,
        // shadowRadius: 3.05,
        // elevation: 4
    },
    label: {
        fontSize: 10,
        letterSpacing: 0.5,
        textAlign: 'center',
        fontFamily: "poppins500",
        color: COLORS.secondary_color,
        textTransform: "capitalize"
    }
});
//