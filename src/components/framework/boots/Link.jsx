import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const Link = ({ label }) => {
    return (
        <Text style={styles.txt}>{label}</Text>
    )
}

export default Link

const styles = StyleSheet.create({
    txt: {
        color: Colors.THEME,
        textDecorationLine: "underline",
        alignSelf: "flex-end"
    }
})