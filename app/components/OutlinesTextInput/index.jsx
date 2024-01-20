//
import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { SIZES } from '../../constants';
import { COLORS } from '../../theme';
//
const OutlinedTextInput = (props) => {
    //
    const { label, onChangeText, Left = () => { }, Right = () => { } } = props;
    //
    return (
        <View style={styles.container}>
            <Text style={[SIZES.text_base, { color: COLORS.primary_color, fontFamily: "poppins400" }]}>
                {label}
            </Text>
            <View style={styles.inputCon}>
                <Left />
                <TextInput
                    {...props}
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholderTextColor={COLORS.font_secondary}
                />
                <Right />
            </View>
        </View>
    );
    //
};
//
const styles = StyleSheet.create({
    container: {
        rowGap: 3,
        // marginTop: 10,
    },
    inputCon: {
        columnGap: 10,
        borderRadius: 5,
        marginBottom: 10,
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