import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Colors, Images } from '../../../constants';
import Spacer from '../boots/Spacer';



const HomeTopBar = ({ notificationOnPress, searchOnPress, walletOnPress, cartOnPress }) => {
    return (
        <View style={styles.container}>
            <FastImage
                source={Images.WHITE_LOGO}
                style={styles.logo}
                resizeMode={FastImage.resizeMode.contain}
            />
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={searchOnPress}>
                    <AntDesign
                        name="search1"
                        size={24}
                        color={Colors.THEME}
                    />
                </TouchableOpacity>
                <Spacer width={12} />
                <TouchableOpacity onPress={notificationOnPress}>
                    <Ionicons
                        name="notifications-outline"
                        size={24}
                        color={Colors.THEME}
                    />
                </TouchableOpacity>
                <Spacer width={12} />

                <TouchableOpacity onPress={walletOnPress}>
                    <SimpleLineIcons
                        name="wallet"
                        size={24}
                        color={Colors.THEME}
                    />
                </TouchableOpacity>
                <Spacer width={12} />

                <TouchableOpacity onPress={cartOnPress}>
                    <MaterialCommunityIcons
                        name="cart-variant"
                        size={24}
                        color={Colors.THEME}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeTopBar

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        maxHeight: verticalScale(65),
        minHeight: verticalScale(65)
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginEnd: verticalScale(20),
        justifyContent: "space-evenly"
    },
    logo: {
        width: moderateScale(230),
        height: verticalScale(230),
        marginLeft: moderateScale(-50),
        marginTop: verticalScale(-80)
    },
})