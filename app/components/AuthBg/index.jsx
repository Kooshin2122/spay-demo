//
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//
const AuthBg = ({ children, style = {} }) => {
    //
    return (
        <View style={[styles.container, style,]}>
            <View style={[styles.cirlcle, { top: -90, left: -30 }]} />
            <View style={[styles.cirlcle, { left: -60 }]} />
            <View style={[styles.cirlcle, { top: -90, right: -20, }]} />
            <View style={[styles.cirlcle, { right: -60 }]} />
            {children}
        </View>
    )
    //
}
//
export default AuthBg;
//
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cirlcle: {
        zIndex: 1,
        width: 180,
        height: 180,
        position: "absolute",
        borderRadius: 180 / 2,
        backgroundColor: "rgba(111, 131, 173, 0.06)"
    }
})
//