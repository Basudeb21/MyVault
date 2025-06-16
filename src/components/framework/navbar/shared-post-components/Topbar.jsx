import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'

const Topbar = ({ userAvatar }) => {
    const [focused, setFocused] = useState(true);
    const handleOnpress = () => {
        setFocused(!focused);
    }

    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Image
                    source={{ uri: userAvatar }}
                    style={styles.userAvatar}
                />
                <View style={styles.userNameContainer}>
                    <Text style={styles.userName}>Fans 5</Text>
                    <Text style={styles.userID}>@u987654321</Text>
                </View>
            </View>
            <TouchableOpacity onPress={handleOnpress}>
                <FontAwesome
                    name={focused ? "bookmark" : "bookmark-o"}
                    size={24}
                    color={Colors.BLACK}
                    style={styles.bookmark}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Topbar

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: moderateScale(20),
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },
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
    },
    bookmark: {
        alignSelf: "center"
    }
})