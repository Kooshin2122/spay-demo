//
import { useCallback, useState, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomSheet, { BottomSheetView, BottomSheetScrollView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { StyleSheet, Platform, SafeAreaView, Text, View, KeyboardAvoidingView, Dimensions } from 'react-native';
//
const { height } = Dimensions.get('screen');
//
const GorhomBottomSheet = ({ sheetRef, snapPoints, autoSize = true, iosDeviderHeight = 0, androidDeiderHeight = 0, children }) => {
    // hooks
    const insets = useSafeAreaInsets();
    //
    const onCloseBtmSheet = () => {
        sheetRef?.current?.close();
    };
    //
    return (
        <BottomSheet
            index={-1}
            ref={sheetRef}
            enablePanDownToClose
            snapPoints={snapPoints}
            onClose={onCloseBtmSheet}
            // bottomInset={insets.bottom}
            enableDynamicSizing={autoSize}
            backdropComponent={(props) => (
                <BottomSheetBackdrop {...props} disappearsOnIndex={-1} enableTouchThrough={false} style={[styles.bottomsheetCon, { height: height }]} />
            )}
        >
            <BottomSheetScrollView
                style={[styles.container]}
                showsVerticalScrollIndicator={false}
            >
                {children}
                {/* <SafeAreaView /> */}
                <View style={{ height: Platform.OS == "android" ? androidDeiderHeight : iosDeviderHeight }} />
            </BottomSheetScrollView>
        </BottomSheet>
        // </View>
    );
    //
};
//
export default GorhomBottomSheet;
//
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius: 30,
    },
    bottomsheetCon: {
        top: 0,
        width: "100%",
        position: "absolute",
        backgroundColor: "rgba(31, 25, 25, 0.75)"
    }
});
//