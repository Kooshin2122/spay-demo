//
import React, { useRef } from 'react';
import { COLORS } from '../../../theme';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { Box, GorhomBottomSheet, ListHeader, TransactionsCard } from '../../../components';
import { send, deposit, withdrawal, bills, remittance, loan, bitcoin, needs } from '../../../assets';
import { AccountCard, DepositSheet, HomeHeader, ImageCarousel, SendAgainCard, SendMoneySheet, ServicesCard, WithdrawSheet } from './components';
//
const HomeScreen = () => {
    //
    const depositSheet = useRef();
    const withdrawSheet = useRef();
    const sendMoneySheet = useRef();
    //
    return (
        <SafeAreaView style={styles.mainCon}>
            {/* Header */}
            <HomeHeader />
            {/* Scroll View */}
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.scrollCon}>
                    {/* your account  */}
                    <ListHeader
                        title="your account"
                        textButton="Add Account"
                    />
                    <AccountCard />
                    {/* services */}
                    <ListHeader title="What would you like to do ?" />
                    <View style={styles.servicesCon}>
                        <ServicesCard
                            label="deposit"
                            image={deposit}
                            sheetRef={depositSheet}
                        />
                        <ServicesCard
                            image={send}
                            label="send"
                            sheetRef={sendMoneySheet}
                        />
                        <ServicesCard
                            label="Withdraw"
                            image={withdrawal}
                            sheetRef={withdrawSheet}
                        />
                        <ServicesCard
                            label="pay bills"
                            image={bills}
                        />
                        <ServicesCard
                            label="remittance"
                            image={remittance}
                        />
                    </View>
                    {/* Carousel */}
                    <View style={{ width: '100%' }}>
                        <ImageCarousel />
                    </View>
                    {/* send again */}
                    <View style={styles.servicesCon}>
                        <ListHeader
                            title="Send again"
                            textButton="see more"
                        />
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.sendAgainCardCon}
                        >
                            <SendAgainCard />
                            <SendAgainCard
                                isProfile
                            />
                            <SendAgainCard
                                isProfile
                                image="https://i.pinimg.com/474x/2e/2f/ac/2e2fac9d4a392456e511345021592dd2.jpg"
                            />
                            <SendAgainCard
                                isProfile
                                image="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
                            />
                            <SendAgainCard
                                isProfile
                                image="https://i.pinimg.com/736x/46/d6/38/46d638b0018a29d734eac03973536c68.jpg"
                            />
                        </ScrollView>
                    </View>
                    {/* recent transactions */}
                    <View style={styles.transactionsCardCon}>
                        <ListHeader
                            title="Recent transactions"
                            textButton="see more"
                        />
                        <TransactionsCard />
                        <TransactionsCard
                            status="income"
                        />
                        <TransactionsCard />
                        <TransactionsCard
                            status="income"
                        />
                        <TransactionsCard />
                        <TransactionsCard
                            status="income"
                        />
                    </View>
                </View>
                {/* end */}
            </ScrollView>
            {/* Deposit Bottom Sheet */}
            <GorhomBottomSheet sheetRef={depositSheet} >
                <DepositSheet sheetRef={depositSheet} />
            </GorhomBottomSheet>
            {/* Send Money Bottom Sheet */}
            <GorhomBottomSheet sheetRef={sendMoneySheet} >
                <SendMoneySheet sheetRef={sendMoneySheet} />
            </GorhomBottomSheet>
            {/* Withdraw Bottom Sheet */}
            <GorhomBottomSheet sheetRef={withdrawSheet} >
                <WithdrawSheet sheetRef={withdrawSheet} />
            </GorhomBottomSheet>
        </SafeAreaView>
    );
    //
};
//
export default HomeScreen;
//
const styles = StyleSheet.create({
    mainCon: {
        flex: 1,
        backgroundColor: COLORS.bg_primary
    },
    container: {
        flex: 1,
        rowGap: 15,
        backgroundColor: COLORS.bg_primary
    },
    scrollCon: {
        flex: 1,
        rowGap: 10,
        paddingBottom: "5%",
        paddingHorizontal: '2.5%',
    },
    servicesCon: {
        gap: 12,
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    sendAgainCardCon: {
        flex: 1,
        columnGap: 10
    },
    transactionsCardCon: {
        rowGap: 10
    },
    bottomsheetCon: {
        top: 0,
        width: "100%",
        position: "absolute",
        backgroundColor: "rgba(31, 25, 25, 0.8)"
    }
});
//