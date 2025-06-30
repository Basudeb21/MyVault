import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../constants'
import { scale } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Feather from 'react-native-vector-icons/dist/Feather'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'

const StoryViewButtonGroup = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const handleOnPressFavorite = () => {
        setIsFavorite(!isFavorite)
    }
    const iconSize = 18
    return (
        <View style={styles.container}>
            <Feather
                name="bookmark"
                color={Colors.WHITE}
                size={iconSize}
            />
            <TouchableOpacity onPress={handleOnPressFavorite}>
                <MaterialIcons
                    name={isFavorite ? "favorite" : "favorite-outline"}
                    color={Colors.WHITE}
                    size={iconSize}
                />
            </TouchableOpacity>
            <FontAwesome5
                name="user-plus"
                color={Colors.WHITE}
                size={iconSize}
            />
            <MaterialIcons
                name="subscriptions"
                color={Colors.WHITE}
                size={iconSize}
            />
            <Feather
                name="dollar-sign"
                color={Colors.WHITE}
                size={iconSize}
            />
            <AntDesign
                name="message1"
                color={Colors.WHITE}
                size={iconSize}
            />
            <Entypo
                name="share"
                color={Colors.WHITE}
                size={iconSize}
            />

        </View>
    )
}

export default StoryViewButtonGroup

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 20,
        zIndex: 100,
        backgroundColor: Colors.TRANSPARENT_WHITE_LIGHT,
        flexDirection: "row",
        alignSelf: "center",
        padding: scale(10),
        justifyContent: "center",
        alignItems: "center",
        gap: scale(15),
        borderRadius: (100)
    }
})