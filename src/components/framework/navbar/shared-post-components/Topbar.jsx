import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, NavigationStrings } from '../../../../constants'
import { moderateScale } from 'react-native-size-matters';

import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import PressableViewProfilePostTopArea from './PressableViewProfilePostTopArea';
import { useNavigation } from '@react-navigation/native';

const Topbar = ({ userAvatar, userName }) => {
    const [focused, setFocused] = useState(true);
    const handleOnpress = () => {
        setFocused(!focused);
    }
    const navigation = useNavigation()
    const handlePressProfileIcon = () => {
        navigation.navigate(NavigationStrings.HOME_STACK, {
            screen: NavigationStrings.HOME_FRIEND_PROFILE_PAGE,
            params: { userName }
        })
    }

    return (
        <View style={styles.container}>

            <PressableViewProfilePostTopArea
                userAvatar={userAvatar}
                userName={userName}
                userID={"@u987654321"}
                onPress={handlePressProfileIcon}
            />
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

    bookmark: {
        alignSelf: "center"
    }
})