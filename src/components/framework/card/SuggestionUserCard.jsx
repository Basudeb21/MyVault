import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../../constants';
import Spacer from '../boots/Spacer';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import GradientIconButtonNoText from '../button/GradientIconButtonNoText';


const SuggestionUserCard = ({ userImage }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: userImage }} style={styles.userImage} />
            <Text style={styles.userName}>NorwegianNerd</Text>
            <Text style={styles.userID}>@u987654321</Text>
            <Spacer height={20} />
            <GradientIconButtonNoText
                Icon={MaterialIcons}
                iconName={"subscriptions"}
                iconSize={14}
                width='90%'
                height={27}

            />
            <Spacer height={5} />
            <GradientIconButtonNoText
                Icon={Ionicons}
                iconName={"person-add"}
                iconSize={14}
                width='90%'
                height={27}
            />
        </View>
    )
}

export default SuggestionUserCard

const styles = StyleSheet.create({
    container: {
        width: moderateScale(150),
        height: verticalScale(240),
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