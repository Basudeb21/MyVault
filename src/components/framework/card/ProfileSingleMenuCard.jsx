import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const ProfileSingleMenuCard = ({ Icon, iconName, text, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Icon
                name={iconName}
                size={16}
                color={Colors.THEME}
            />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ProfileSingleMenuCard

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.WHITE,
        minWidth: "48%",
        maxWidth: "48%",
        paddingVertical: verticalScale(10),
        elevation: scale(10),
        borderRadius: scale(8),
        paddingStart: moderateScale(20)

    },
    text: {
        marginStart: moderateScale(10),
        fontWeight: "600",
        fontSize: scale(14)
    }
})