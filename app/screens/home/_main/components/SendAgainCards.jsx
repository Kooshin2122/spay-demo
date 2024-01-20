//
import React from 'react';
import { AntDesign } from 'react-native-vector-icons';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../../theme';
//
const { width, height } = Dimensions.get('screen');
//
const SendAgainCard = ({ isProfile = false, image = "https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" }) => {
    //
    return (
        <View style={styles.container}>
            {
                isProfile ?
                    <View style={styles.imageCon}>
                        <Image
                            resizeMode="cover"
                            source={{ uri: image }}
                            style={{ width: "100%", height: "100%", borderWidth: 2, borderRadius: 10, borderColor: COLORS.tertiary_color }}
                        />
                    </View>
                    :
                    <View style={styles.iconCon}>
                        <AntDesign
                            size={23}
                            name="plus"
                            color={COLORS.tertiary_color}
                        />
                    </View>
            }
        </View>
    );
    //
};
//
export default SendAgainCard;
//
const styles = StyleSheet.create({
    container: {
        width: 75,
        height: 75,
        borderRadius: 10,
        backgroundColor: '#f4e4cd'
    },
    iconCon: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    imageCon: {
        width: "100%",
        height: "100%",
    }
});
//