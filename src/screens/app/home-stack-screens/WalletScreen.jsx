import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackpressTopBar } from '../../../components/framework/navbar'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const WalletScreen = () => {
    return (
        <View>
            <BackpressTopBar title={"Wallet"} />
            <Text>WalletScreen</Text>
        </View>
    )
}

export default WalletScreen

const styles = StyleSheet.create({})