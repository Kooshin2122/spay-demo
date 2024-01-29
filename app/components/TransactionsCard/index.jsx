//
import React from 'react';
import { COLORS } from '../../theme';
import { Avatar } from 'react-native-paper';
import { LAY_OUT, SIZES } from '../../constants';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, Entypo } from 'react-native-vector-icons';
//
const TransactionsCard = ({ receiverName, status, amount, image, date, time, isVisible = false }) => {
    //
    return (
        <View style={styles.container}>
            {/* icon container */}
            <View style={styles.avatarCon}>
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
            {/* transaction details */}
            <View style={styles.transactionInfo}>
                <Text style={[SIZES.text_base]}>
                    {receiverName}
                </Text>
                <Text style={[SIZES.text_md, { color: COLORS.font_secondary, fontFamily: "poppins400" }]}>
                    {date}, {time}
                </Text>
            </View>
            {/* money*/}
            <View style={[LAY_OUT.flex_row, { columnGap: 0 }]}>
                <Entypo
                    size={12}
                    color={status ? "#5dad72" : "#f43f5f"}
                    name={status ? "plus" : "minus"}
                />
                <Text style={[SIZES.text_xl, { color: status ? "#5dad72" : "#f43f5f" }]}>
                    {
                        isVisible ? amount : null
                    }
                </Text>
            </View>
        </View>
    );
    //
};
//
export default TransactionsCard;
//
const styles = StyleSheet.create({
    container: {
        width: "100%",
        columnGap: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    avatarCon: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        alignItems: "center",
        justifyContent: "center",
    },
    transactionInfo: {
        flex: 1,
    }
});
//