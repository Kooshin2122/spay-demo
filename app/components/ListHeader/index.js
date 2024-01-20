//
import React from 'react';
import { COLORS } from '../../theme';
import { StyleSheet, Text, View } from 'react-native';
//
const ListHeader = ({ title = "Title", textButton = null, children, containerStyle, childredConStyle = {}, onClickTextButton = () => { } }) => {
    //
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.title}>
                {title}
            </Text>
            {textButton && <Text onPress={onClickTextButton} style={styles.textButton}>{textButton}</Text>}
        </View>
    )
    //
}
//
export default ListHeader;
//
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        flex: 1,
        fontSize: 14,
        letterSpacing: 0.5,
        fontFamily: "poppins500",
        color: COLORS.font_primary,
    },
    textButton: {
        fontSize: 14,
        letterSpacing: 0.5,
        fontFamily: "poppins500",
        color: COLORS.primary_color
    },
})
//