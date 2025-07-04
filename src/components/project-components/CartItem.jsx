import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartProduct from '../framework/cart/CartProduct'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GradientIconButton from '../framework/button/GradientIconButton';
import Spacer from '../framework/boots/Spacer';
import { verticalScale } from 'react-native-size-matters';

const CartItem = () => {

    return (
        <View >
            <CartProduct />
            <Spacer height={30} />
            <View style={styles.btnRow}>
                <GradientIconButton
                    Icon={MaterialIcons}
                    label={"Remove"}
                    iconName={"delete"}
                    iconSize={20}
                    width='45%'
                    fontSize={14}
                />
                <GradientIconButton
                    Icon={Entypo}
                    label={"Buy Now"}
                    iconName={"shopping-bag"}
                    iconSize={16}
                    width='40%'
                    fontSize={14}
                />
            </View>

        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({

    btnRow: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
})