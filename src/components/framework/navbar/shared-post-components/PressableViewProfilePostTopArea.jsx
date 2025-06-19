import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Colors } from '../../../../constants'

const PressableViewProfilePostTopArea = ({ userAvatar, userName, userID, onPress }) => {
    return (
        <TouchableOpacity style={styles.userContainer} onPress={onPress}>
            <Image
                source={{ uri: userAvatar }}
                style={styles.userAvatar}
            />
            <View style={styles.userNameContainer}>
                <Text style={styles.userName}>{userName}</Text>
                <Text style={styles.userID}>{userID}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PressableViewProfilePostTopArea

const styles = StyleSheet.create({
    userContainer: {
        flexDirection: "row"
    },
    userAvatar: {
        height: verticalScale(50),
        width: moderateScale(50),
        borderRadius: scale(100),
    },
    userNameContainer: {
        marginStart: moderateScale(10),
        justifyContent: "center"
    },
    userName: {
        fontSize: scale(18),
        fontWeight: "500"
    },
    userID: {
        color: Colors.USER_ID_NAME,
        fontSize: scale(10),
        fontWeight: "500"
    }
})