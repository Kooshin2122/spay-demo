//
import React from 'react';
import { COLORS } from '../../theme';
import { ActivityIndicator, Pressable, StyleSheet, Text, TouchableOpacity, } from 'react-native';
//
const CustomBtn = ({ title = "Title", style = {}, color = "#ffffff", titleStyle = {}, activeIndicator = false, onClickHandler = () => { } }) => {
    //
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onClickHandler} activeOpacity={0.8}>
            {
                activeIndicator
                    ?
                    <ActivityIndicator />
                    :
                    <Text style={[styles.title, , titleStyle, { color: color }]}>
                        {title}
                    </Text>
            }
        </TouchableOpacity>
    );
    //
}
//
export default CustomBtn;
//
const styles = StyleSheet.create({
    container: {
        padding: '3%',
        borderRadius: 5,
        backgroundColor: COLORS.primary_color
    },
    title: {
        fontSize: 16,
        letterSpacing: 0.9,
        textAlign: 'center',
        fontFamily: "poppins600",
        color: COLORS.bg_primary,
        textTransform: "uppercase"
    }
})
//