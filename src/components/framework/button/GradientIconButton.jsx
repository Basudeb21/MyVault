import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../constants';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Spacer from '../boots/Spacer';

const GradientIconButton = ({ label = "Swipe to next", onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <LinearGradient
                colors={[Colors.BUTTON_GRADIENT_TWO, Colors.BUTTON_GRADIENT_ONE]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
            >
                <Text style={styles.text}>{label}</Text>
                <Spacer width={20} />
                <AntDesign
                    name="arrowright"
                    color={Colors.WHITE}
                    size={20}
                    style={styles.cross}
                />
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default GradientIconButton

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: Colors.WHITE,
        fontWeight: "500",
        fontSize: scale(13),
    },
})

