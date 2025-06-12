import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants'

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