import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackpressTopBar from '../../../components/framework/navbar/BackpressTopBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import HR from '../../../components/framework/boots/HR';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Spacer from '../../../components/framework/boots/Spacer';
import ProfileFundCard from '../../../components/framework/card/ProfileFundCard';
import GradientTextButton from '../../../components/framework/button/GradientTextButton';
import OutLineButton from '../../../components/framework/button/OutLineButton';
import TextInputBox from '../../../components/framework/input/TextInputBox';
import TextArea from '../../../components/framework/input/TextArea';
import { Colors } from '../../../constants';

const WalletScreen = () => {
    return (
        <SafeAreaView>
            <BackpressTopBar title={"Wallet"} />
            <View style={styles.topContainer}>
                <Text>Your payments and Wallet</Text>
                <Spacer height={10} />
                <HR height={1} />
            </View>
            <ProfileFundCard />
            <View style={styles.btnRow}>
                <GradientTextButton label='Add Funds' width='40%' fontSize={14} />
                <OutLineButton label_two='Transactions' width='40%' fontSize={14} />
            </View>
            <View style={styles.inputArea}>
                <TextInputBox placeholder='Funding Ammount' />
                <Spacer height={10} />
                <TextInputBox placeholder='Payment Method' />
                <Spacer height={10} />
                <TextInputBox placeholder='Enter bank account number' />
                <Spacer height={10} />
                <TextArea placeholder='Message' height={100} borderColor={Colors.INPUTBOX_DEACTIVE_BORDER_COLOR} />
                <Spacer height={15} />
                <GradientTextButton label='Add Ammount' />

            </View>
        </SafeAreaView>
    )
}

export default WalletScreen

const styles = StyleSheet.create({
    topContainer: {
        marginHorizontal: moderateScale(20)
    },
    btnRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: verticalScale(15)
    },
    inputArea: {
        marginTop: verticalScale(25),
        marginHorizontal: moderateScale(20)
    }
})