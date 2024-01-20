//
import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { SIZES } from '../../constants';
import { COLORS } from '../../theme';
//
const OutlinedTextInput = (props) => {
    //
    const { onChangeText, Left = () => { }, Right = () => { } } = props;
    //
    return (
        <View style={styles.container}>
            <Left />
            <TextInput
                {...props}
                style={styles.input}
                onChangeText={onChangeText}
                placeholderTextColor={COLORS.font_secondary}
            />
            <Right />
        </View>
    );
    //
};
//
const styles = StyleSheet.create({
    container: {
        columnGap: 10,
        borderRadius: 5,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 0.7,
        borderColor: COLORS.primary_color,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        letterSpacing: 0.5,
        fontFamily: "poppins400",
        color: COLORS.primary_color,
    },
});
//
export default OutlinedTextInput;
//