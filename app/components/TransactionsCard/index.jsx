//
import React from 'react';
import { COLORS } from '../../theme';
import { LAY_OUT, SIZES } from '../../constants';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, Entypo } from 'react-native-vector-icons';
//
const TransactionsCard = ({ status = "transfer", isVisible = true, title = "Mohamed Ali", date = "Wed 26 June 24", time = "17:23:00", money = 200 }) => {
    //
    return (
        <View style={styles.container}>
            {/* icon container */}
            <View style={styles.iconCon}>
                <Ionicons
                    size={23}
                    name={status == "transfer" ? "trending-up-outline" : "trending-down-outline"}
                    color={status == "transfer" ? "green" : "red"}
                />
            </View>
            {/* transaction details */}
            <View style={styles.transactionInfo}>
                <Text style={[SIZES.text_base]}>
                    {title}
                </Text>
                <Text style={[SIZES.text_md, { color: COLORS.font_secondary, fontFamily: "poppins400" }]}>
                    {date}, {time}
                </Text>
            </View>
            {/* money*/}
            <View style={[LAY_OUT.flex_row, { columnGap: 0 }]}>
                <Entypo
                    size={17}
                    color={status == "transfer" ? "green" : "red"}
                    name={status == "transfer" ? "plus" : "minus"}
                />
                <Text style={[SIZES.text_lg, { color: status == "transfer" ? "green" : "red" }]}>
                    {
                        isVisible ? money : null
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
    iconCon: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50 / 2,
        backgroundColor: COLORS.bg_tertiary
    },
    transactionInfo: {
        flex: 1,
    }
});
//