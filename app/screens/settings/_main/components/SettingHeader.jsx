//
import React from 'react';
import { COLORS } from '../../../../theme';
import { SIZES } from '../../../../constants';
import { ImageViewer } from '../../../../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
//
const SettingHeader = () => {
    //
    const { top } = useSafeAreaInsets();
    //
    return (
        <View
            style={{ height: 250, backgroundColor: '#ffffff' }}
        >
            <View style={[styles.container, { paddingTop: top }]}>
                <Text style={[SIZES.text_lg, { textAlign: "center", fontFamily: "poppins500", letterSpacing: 0.8, textTransform: "uppercase" }]}>
                    My Profile
                </Text>
                {/* profile */}
                <View style={styles.profileCon}>
                    <ImageViewer />
                    <Text style={[SIZES.text_base]}>
                        Abdirahman Abdirashid
                    </Text>
                    <Text style={[SIZES.text_base]}>
                        0615094596
                    </Text>
                </View>
            </View>
        </View>
    );
    //
};
//
export default SettingHeader;
//
const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 20,
        padding: "3.5%",
        paddingBottom: "5%",
        alignItems: "center",
    },
    profileCon: {
        rowGap: 7,
        alignItems: "center"
    }
});
//