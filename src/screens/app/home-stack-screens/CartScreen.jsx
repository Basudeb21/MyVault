import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackpressTopBar } from '../../../components/framework/navbar'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const CartScreen = () => {
    return (
        <View>
            <BackpressTopBar title={"Cart"} />
            <Text>Cart</Text>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({})