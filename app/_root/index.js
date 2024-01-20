//
import React from 'react';
import BotomTabs from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Poppins_300Light, Poppins_100Thin, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black } from '@expo-google-fonts/poppins';
//
const Root = () => {
    // 
    let [fontsLoaded] = useFonts({
        poppins100: Poppins_100Thin,
        poppins300: Poppins_300Light,
        poppins400: Poppins_400Regular,
        poppins500: Poppins_500Medium,
        poppins600: Poppins_600SemiBold,
        poppins700: Poppins_700Bold,
        poppins800: Poppins_800ExtraBold,
        poppins900: Poppins_900Black,
    });
    // 
    if (!fontsLoaded) return
    //
    return (
        <NavigationContainer>
            <BotomTabs />
        </NavigationContainer>
    )
}
//
export default Root;
//