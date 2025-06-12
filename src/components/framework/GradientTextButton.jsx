import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../constants';
import { scale, verticalScale } from 'react-native-size-matters';

const GradientTextButton = ({ label = "Label", onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <LinearGradient
                colors={[Colors.BUTTON_GRADIENT_TWO, Colors.BUTTON_GRADIENT_ONE]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
            >
                <Text style={styles.text}>{label}</Text>

            </LinearGradient>
        </TouchableOpacity>
    )
}

export default GradientTextButton

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: verticalScale(33),
        borderRadius: 6,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: Colors.WHITE,
        fontWeight: "700",
        fontSize: scale(18),
    },
})