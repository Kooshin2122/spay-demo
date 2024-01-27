//
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//
const Box = ({ children, style = {} }) => {
    //
    return (
        <View style={[styles.container, style,]}>
            {children}
        </View>
    )
    //
}
//
export default Box;
//
const styles = StyleSheet.create({
    container: {
        rowGap: 13
    }
})
//