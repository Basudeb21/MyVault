import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Entypo from 'react-native-vector-icons/dist/Entypo'

const OutlineIconButton = ({ Icon, iconName, label, onPress }) => {
    return (
        <View style={styles.btn} onPress={onPress}>
            <Icon
                name={iconName}
                size={20}
                color={Colors.WHITE}
                style={styles.icon}
            />
            <Text style={styles.btnTxt}>{label}</Text>
            <TouchableOpacity onPress={onPress}>
                <Entypo
                    name="chevron-thin-down"
                    size={20}
                    color={Colors.THEME}
                    style={styles.iconDown}
                />
            </TouchableOpacity>
        </View>
    )
}

export default OutlineIconButton

const styles = StyleSheet.create({
    btn: {
        borderWidth: scale(1),
        borderColor: Colors.THEME,
        paddingVertical: verticalScale(5),
        borderRadius: scale(25),
        flexDirection: "row",
        alignItems: "center",
        marginBottom: verticalScale(10),
        paddingRight: moderateScale(10),
    },
    icon: {
        backgroundColor: Colors.THEME,
        padding: scale(7),
        borderRadius: scale(100),
        marginStart: moderateScale(10)
    },
    btnTxt: {
        fontWeight: "500",
        fontSize: scale(18),
        color: Colors.THEME,
        marginStart: moderateScale(10),
        flex: 1
    },
    iconDown: {
        marginLeft: "auto",
    }
})
