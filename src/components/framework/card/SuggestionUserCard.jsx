import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { Colors } from '../../../constants';
import Spacer from '../boots/Spacer';
import GradientTextButton from '../button/GradientTextButton';


const SuggestionUserCard = ({ userImage }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: userImage }} style={styles.userImage} />
            <Text style={styles.userName}>NorwegianNerd</Text>
            <Text style={styles.userID}>@u987654321</Text>
            <Spacer height={20} />
            <GradientTextButton label='Subscribe' height={20} fontSize={10} width='80%' />

        </View>
    )
}

export default SuggestionUserCard

const styles = StyleSheet.create({
    container: {
        width: moderateScale(150),
        height: verticalScale(219),
        borderColor: Colors.PLACEHOLDER,
        borderWidth: scale(1),
        borderRadius: scale(8),
        justifyContent: "center",
        alignItems: "center",
        marginStart: moderateScale(20)

    },
    userImage: {
        width: moderateScale(110),
        height: verticalScale(110),
        borderRadius: scale(100)
    },
    userName: {
        fontSize: scale(14),
        fontWeight: "500",
        marginTop: verticalScale(10)
    },
    userID: {
        fontSize: scale(10),
        fontWeight: "500",
        marginTop: verticalScale(5),
        color: Colors.USER_ID_NAME
    },

})