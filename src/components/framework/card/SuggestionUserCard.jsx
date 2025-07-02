import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../../constants';
import Spacer from '../boots/Spacer';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import GradientIconButtonNoText from '../button/GradientIconButtonNoText';
import GradientOutlineIconButton from '../button/GradientOutlineIconButton';


const SuggestionUserCard = ({ userImage }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: userImage }} style={styles.userImage} />
            <Text style={styles.userName}>NorwegianNerd</Text>
            <Text style={styles.userID}>@u987654321</Text>
            <Spacer height={8} />
            <View style={styles.row}>
                <GradientOutlineIconButton
                    Icon={MaterialIcons}
                    iconName={"subscriptions"}
                    iconSize={14}
                    width={"45%"}
                    height={20}
                />
                <GradientOutlineIconButton
                    Icon={Ionicons}
                    iconName={"person-add"}
                    iconSize={14}
                    width={"45%"}
                    height={20}
                />
            </View>

        </View>
    )
}

export default SuggestionUserCard

const styles = StyleSheet.create({
    container: {
        width: moderateScale(110),
        height: verticalScale(130),
        borderColor: Colors.PLACEHOLDER,
        borderWidth: scale(1),
        borderRadius: scale(7),
        justifyContent: "center",
        alignItems: "center",

    },
    row: {
        minWidth: "100%",
        maxWidth: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    userImage: {
        width: moderateScale(58),
        height: verticalScale(58),
        borderRadius: scale(100)
    },
    userName: {
        fontSize: scale(12),
        fontWeight: "500",
        marginTop: verticalScale(3)
    },
    userID: {
        fontSize: scale(9),
        fontWeight: "500",
        color: Colors.USER_ID_NAME
    },

})