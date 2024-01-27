//
import React, { useState } from 'react';
import { COLORS } from '../../../theme';
import { LAY_OUT, SIZES } from '../../../constants';
import { BalanceCard, StatusCard } from './components';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Box, ListHeader, TransactionsCard } from '../../../components';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
//
const HistoryScreen = () => {
    //
    const [eyeToggle, setEyeToggle] = useState(true);
    //
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={[SIZES.text_base, { textAlign: 'center' }]}>
                    Transactions
                </Text>
            </View>
            {/* Scroll */}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.scrollCon}>
                    <BalanceCard
                        amount='12.50'
                        title="Last Balance"
                        label="from 21 Jun 2023 to 27 Jan 2024"
                    />
                    <View style={[LAY_OUT.flex_row, { justifyContent: 'space-between' }]}>
                        <StatusCard
                            amount='14,345.50'
                            label="Total Credit"
                        />
                        <StatusCard
                            amount='12,321.50'
                            label="Total Depit"
                            bgColor="rgba(33, 157, 215, 0.5)"
                        />
                    </View>
                    <Box>
                        <ListHeader
                            title="Transactions"
                            Element={() => <MaterialCommunityIcons name={eyeToggle ? 'eye-outline' : 'eye-off-outline'} size={23} color={COLORS.font_primary} onPress={() => setEyeToggle(prev => !prev)} />}
                        />
                        <TransactionsCard
                            isVisible={eyeToggle}
                        />
                        <TransactionsCard
                            status="income"
                            isVisible={eyeToggle}
                        />
                        <TransactionsCard
                            isVisible={eyeToggle} />
                        <TransactionsCard
                            status="income"
                            isVisible={eyeToggle}
                        />
                        <TransactionsCard
                            isVisible={eyeToggle} />
                        <TransactionsCard
                            status="income"
                            isVisible={eyeToggle}
                        />
                    </Box>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
    //
};
//
export default HistoryScreen;
//
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg_primary
    },
    header: {
        padding: '3%',
        borderBottomWidth: 0.7,
        borderColor: COLORS.gray_color,
    },
    scrollCon: {
        rowGap: 15,
        padding: '3%'
    }
});
//