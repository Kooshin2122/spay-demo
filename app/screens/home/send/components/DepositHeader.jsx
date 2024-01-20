//
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SIZES } from '../../../../constants';
import { COLORS } from '../../../../theme';
import { useNavigation } from '@react-navigation/core';
//
const DepositHeader = ({ depositName, depositDesc }) => {
    //
    const { goBack } = useNavigation();
    //
    return (
        <View style={styles.container}>
            <Pressable onPress={goBack}>
                <AntDesign
                    size={23}
                    name="left"
                />
            </Pressable>
            <View style={{ width: "70%", alignSelf: "center", rowGap: 5 }}>
                <Text style={[SIZES.text_2xl, { textAlign: "center" }]}>
                    {depositName}
                </Text>
                <Text style={[SIZES.text_md, { textAlign: "center", fontFamily: 'poppins400', color: COLORS.font_secondary }]}>
                    {depositDesc}
                </Text>
            </View>
        </View>
    );
    //
}
//
export default DepositHeader;
//
const styles = StyleSheet.create({
    container: {
        rowGap: 1,
        paddingHorizontal: "2%",
        // flexDirection: "row",
        // alignItems: "center",
    }
});
//