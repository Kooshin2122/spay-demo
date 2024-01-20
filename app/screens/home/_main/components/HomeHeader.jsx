//
import React from 'react';
import { COLORS } from '../../../../theme';
import { LAY_OUT, SIZES } from '../../../../constants';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from 'react-native-vector-icons';
//
const HomeHeader = () => {
    //
    return (
        <View style={styles.container}>
            {/* user data */}
            <View style={[LAY_OUT.flex_row, { columnGap: 10 }]}>
                <Image
                    resizeMode="cover"
                    style={{ width: 45, height: 45, borderRadius: 12, borderWidth: 2, borderColor: COLORS.primary_color }}
                    source={{ uri: "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" }}
                />
                <View>
                    <Text style={[SIZES.text_sm, { color: COLORS.font_secondary, fontFamily: "poppins400" }]}>
                        welcome back
                    </Text>
                    <Text style={[SIZES.text_base, { color: COLORS.font_primary }]}>
                        Abdirahman Abdi
                    </Text>
                </View>
            </View>
            <View style={[LAY_OUT.flex_row, { columnGap: 5 }]}>
                <Pressable>
                    <Feather name="edit" size={23} />
                </Pressable>
                {/* <Pressable>
                    <Feather name="more-vertical" size={23} />
                </Pressable> */}
            </View>
        </View>
    );
    //
};
//
export default HomeHeader;
//
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: "1.5%",
        paddingBottom: "3%",
        paddingHorizontal: "3%",
        justifyContent: "space-between",
        backgroundColor: COLORS.bg_primary
    }
});
//