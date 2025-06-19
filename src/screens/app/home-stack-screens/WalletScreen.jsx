import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackpressTopBar from '../../../components/framework/navbar/BackpressTopBar';
import { SafeAreaView } from 'react-native-safe-area-context';

const WalletScreen = () => {
    return (
        <SafeAreaView>
            <BackpressTopBar title={"Wallet"} />
            <Text>WalletScreen</Text>
        </SafeAreaView>
    )
}

export default WalletScreen

const styles = StyleSheet.create({})