//
import React from 'react';
import { COLORS } from '../../../../theme';
import { LAY_OUT, SIZES } from '../../../../constants';
import { StyleSheet, Text, View, Pressable } from 'react-native';
//
const SettingCards = ({ label, RightIcon = () => { }, LeftIcon = () => { }, onClick = () => { } }) => {
    //
    return (
        <Pressable onPress={onClick} style={styles.container}>
            {/* Right Icon */}
            <RightIcon />
            <View style={styles.subCon}>
                {/* label */}
                <Text style={[SIZES.text_lg, { flex: 1 }]} >
                    {label}
                </Text>
                {/* Left Icon */}
                <LeftIcon />
            </View>
            {/* End */}
        </Pressable>
    );
    //
}
//
export default SettingCards;
//
const styles = StyleSheet.create({
    container: {
        columnGap: 10,
        paddingLeft: "3.5%",
        flexDirection: "row",
        alignItems: "center",
    },
    subCon: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 0.7,
        paddingRight: "3.5%",
        paddingVertical: "3.5%",
        borderColor: COLORS.gray_color,
    }
});
//