//
import React, { useState, useEffect } from 'react';
import { COLORS } from '../../theme';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
//
const QrCodeScannerScreen = () => {
    //
    const [scanned, setScanned] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    //
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };
        getBarCodeScannerPermissions();
    }, []);
    //
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        console.log('data........', data);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
    //
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    //
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '85%', height: 370, borderRadius: 20, overflow: 'hidden' }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            </View>
            {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
        </SafeAreaView>
    );
    //
};
//
export default QrCodeScannerScreen;
//
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.bg_primary
    }
});
//