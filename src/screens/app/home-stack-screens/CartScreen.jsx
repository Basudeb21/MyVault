import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackpressTopBar from '../../../components/framework/navbar/BackpressTopBar'
import CartItem from '../../../components/project-components/CartItem'
import { Colors } from '../../../constants'
import Spacer from '../../../components/framework/boots/Spacer'

const CartScreen = () => {
    return (
        <View style={styles.container}>
            <BackpressTopBar title={"Cart"} />
            <ScrollView>
                <CartItem />
                <Spacer height={40} />
                <CartItem />
                <Spacer height={120} />

            </ScrollView>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE
    },
})