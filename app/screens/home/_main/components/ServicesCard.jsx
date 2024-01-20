//
import React from 'react';
import { COLORS } from '../../../../theme';
import img from '../../../../assets/send.png';
import { useNavigation } from '@react-navigation/core';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
//
const { width } = Dimensions.get('screen');
//
const ServicesCard = ({ label, image, sheetRef }) => {
    //
    const { navigate } = useNavigation();
    //
    const onClickService = () => {
        sheetRef?.current?.expand();
    }
    //
    return (
        <Pressable onPress={onClickService} style={styles.container}>
            <View style={styles.imageCon}>
                <Image
                    source={img}
                    resizeMode="cover"
                    style={{ width: 30, height: 30 }}
                />
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
        width: "18%",
        alignItems: "center",
    },
    imageCon: {
        width: "100%",
        borderRadius: 7,
        height: width / 6,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.bg_tertiary
    },
    label: {
        fontSize: 10,
        letterSpacing: 0.5,
        fontFamily: "poppins600",
        color: COLORS.secondary_color,
        textTransform: "capitalize"
    }
});
//