import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import Spacer from '../boots/Spacer';



const NotificationCard = ({ userImage, userName, notification, time }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.userImage} source={{ uri: userImage }} />
            <View style={styles.infoContainer}>
                <View style={styles.notificationContainer}>
                    <Text style={styles.notificationTxt}>
                        <Text style={styles.userName}>{userName}</Text>
                        <Spacer width={5} />
                        <Text >{notification}</Text>
                    </Text>
                </View>
                <Text style={styles.time}>{time}</Text>

            </View>
        </TouchableOpacity>
    )
}

export default NotificationCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: moderateScale(30),
        paddingRight: moderateScale(40),
        marginBottom: verticalScale(25)
    },
    userImage: {
        width: moderateScale(50),
        height: verticalScale(50),
        borderRadius: scale(100),
    },
    infoContainer: {
        marginStart: moderateScale(20),
        justifyContent: "center"
    },
    notificationContainer: {
        flexDirection: "row",
        maxWidth: '90%',
    },
    userName: {
        color: Colors.THEME,
        fontWeight: "500",
        fontSize: scale(13)
    },
    notificationTxt: {
        fontWeight: "500",
        fontSize: scale(13),
        textAlign: "left"
    },
    time: {
        color: Colors.FADE_TEXT,
        fontSize: scale(10),
        fontWeight: "600",
        marginTop: verticalScale(5)
    }
})