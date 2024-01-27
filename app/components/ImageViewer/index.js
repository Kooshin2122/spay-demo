//
import React from 'react';
import { COLORS } from '../../theme';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, Feather } from 'react-native-vector-icons';
//
const ImageViewer = ({ image = null, iconColor = COLORS.primary_color, style = {}, onSelectImage = () => { } }) => {
    //
    return (
        <Pressable onPress={onSelectImage} style={[styles.imageContainer, style]}>
            {
                image ?
                    <Image
                        resizeMode="cover"
                        source={{ uri: image }}
                        style={{ width: '100%', height: '100%', borderRadius: 50 }}
                    />
                    :
                    <FontAwesome5 name="user-alt" size={30} color={iconColor} />
            }
            <Pressable style={styles.editCon}>
                <Feather
                    size={13}
                    name="edit"
                    color="#ffffff"
                />
            </Pressable>
        </Pressable>
    )
}
//
export default ImageViewer;
//
const styles = StyleSheet.create({
    imageContainer: {
        width: 80,
        height: 80,
        zIndex: 1,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2.5,
        borderColor: COLORS.secondary_color,
        backgroundColor: COLORS.bg_primary,
    },
    editCon: {
        zIndex: 1,
        bottom: 5,
        right: -5,
        position: "absolute",
        width: 25,
        height: 25,
        padding: "2%",
        borderRadius: 25 / 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary_color
    }
})
//