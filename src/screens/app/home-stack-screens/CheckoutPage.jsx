import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackpressTopBar from '../../../components/framework/navbar/BackpressTopBar'
import InputFormContainer from '../../../components/project-components/InputFormContainer'
import Spacer from '../../../components/framework/boots/Spacer'
import GradientTextButton from '../../../components/framework/button/GradientTextButton'
import { Colors, NavigationStrings } from '../../../constants'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const CheckoutPage = () => {
    const navigation = useNavigation();
    const handlePlaceOrder = () => {
        navigation.navigate(NavigationStrings.HOME_PLACE_ORDER_SCREEN)
    }
    return (
        <SafeAreaView style={{ backgroundColor: Colors.WHITE, flex: 1 }}>
            <BackpressTopBar title={"Checkout"} />
            <ScrollView>
                <InputFormContainer head={"Billing Address"} />
                <Spacer height={40} />
                <InputFormContainer head={"Shipping Address"} />
                <Spacer height={40} />
                <View style={styles.btn}>
                    <GradientTextButton
                        width='90%'
                        label='Place Order'
                        onPress={handlePlaceOrder}
                    />
                </View>
                <Spacer height={100} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default CheckoutPage

const styles = StyleSheet.create({
    btn: {
        alignItems: "center"
    }
})