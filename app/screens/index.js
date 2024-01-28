//
import React from 'react';
import { COLORS } from '../theme';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Icons
import { Feather, MaterialIcons, MaterialCommunityIcons } from 'react-native-vector-icons';
// screens
import HomeStack from './home';
import CardsStack from './Cards';
import HistoryStack from './history';
import AccountSettingStack from './settings';
import QrCodeScannerScreen from './QrScanner';
//
const Tab = createBottomTabNavigator();
//
const BotomTabs = () => {
    //
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary_color,
                tabBarStyle: {
                    borderTopColor: 'rgba(0, 0, 0, .2)',
                    paddingTop: Platform.OS === 'android' ? 15 : 10,
                    paddingBottom: Platform.OS === 'android' ? 15 : 30,
                    height: Platform.OS === 'android' ? 70 : 90,
                },
            }}
        >
            <Tab.Screen name="HomeStack" component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="HistoryStack" component={HistoryStack}
                options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color, size, }) => (
                        <MaterialCommunityIcons name="history" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="QrCodeScanner" component={QrCodeScannerScreen}
                options={{
                    // tabBarBadge: 1,
                    tabBarLabel: 'Scanner',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="qrcode-scan" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen name="CardsStack" component={CardsStack}
                options={{
                    // tabBarBadge: 1,
                    tabBarLabel: 'My Qr',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="award" color={color} size={23} />
                    ),
                }}
            />
            <Tab.Screen name="AccountSettingStack" component={AccountSettingStack}
                options={{
                    // tabBarBadge: 1,
                    tabBarLabel: 'Seetings',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-cog" color={color} size={27} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
    //
}
//
export default BotomTabs;
//