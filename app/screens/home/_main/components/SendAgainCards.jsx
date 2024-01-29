//
import React from 'react';
import { COLORS } from '../../../../theme';
import { Avatar } from 'react-native-paper';
import { SIZES } from '../../../../constants';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
//
const { width, height } = Dimensions.get('screen');
//
const SendAgainCard = ({ image, receiverName = [] }) => {
    //
    return (
        <View style={styles.container}>
            {
                image ?
                    <Avatar.Image
                        size={50}
                        source={{ uri: image }}
                    /> :
                    <Avatar.Text
                        size={50}
                        label={receiverName[0]}
                        style={{ backgroundColor: COLORS.primary_color }}
                        labelStyle={[SIZES.text_2xl, { color: '#fff' }]}
                    />
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
    }
});
//