//
import React from 'react';
import { COLORS } from '../../../../theme';
import { SIZES } from '../../../../constants';
import { useNavigation } from '@react-navigation/core';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Pressable, StyleSheet, Text, View } from 'react-native';
//
const Header = ({ headerName, headerDesc }) => {
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
                    {headerName}
                </Text>
                <Text style={[SIZES.text_md, { textAlign: "center", fontFamily: 'poppins400', color: COLORS.font_secondary }]}>
                    {headerDesc}
                </Text>
            </View>
        </View>
    );
    //
}
//
export default Header;
//
const styles = StyleSheet.create({
    container: {
        padding: "2%",
    }
});
//