import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../../constants'
import { scale } from 'react-native-size-matters'

const NoContantPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No post available of this content</Text>
        </View>
    )
}

export default NoContantPage

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    text: {
        color: Colors.THEME,
        fontSize: scale(20),
        alignSelf: "center",
        fontWeight: '500',
    }
})