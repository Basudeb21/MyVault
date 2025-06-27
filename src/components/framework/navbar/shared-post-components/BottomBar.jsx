import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { Colors, NavigationStrings } from '../../../../constants'
import { useNavigation } from '@react-navigation/native'
import SendTipsModal from '../../modal/SendTipsModal'

const BottomBar = ({ focused = true }) => {
    const [favoriteFocused, setFavoriteFocused] = useState(false);
    const [commentFocused, setCommentFocused] = useState(false);
    const [giftFocused, setGiftFocused] = useState(false);

    const navigation = useNavigation();
    const handleSetFavorite = () => {
        setFavoriteFocused(!favoriteFocused);
    }

    const openReacts = () => {
        navigation.navigate(NavigationStrings.POST_STACK, {
            screen: NavigationStrings.ALL_REACTS
        })
    }

    const openTips = () => {
        navigation.navigate(NavigationStrings.POST_STACK, {
            screen: NavigationStrings.ALL_TIPS
        })
    }

    const handleSetComment = () => {
        setCommentFocused(!commentFocused);
        navigation.navigate(NavigationStrings.POST_STACK, {
            screen: NavigationStrings.ALL_COMMENTS
        })
    }

    const handleSetGift = () => {
        setGiftFocused(!giftFocused);
    }

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity style={styles.iconContainer} onPress={handleSetFavorite}>
                    <MaterialIcons
                        name={favoriteFocused ? "favorite" : "favorite-border"}
                        size={24}
                        color={favoriteFocused ? Colors.THEME : Colors.BLACK}
                    />
                    <TouchableOpacity onPress={openReacts}>
                        <Text style={styles.counter}>50K</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={handleSetComment}>
                    <Ionicons
                        name={commentFocused ? "chatbox-ellipses" : "chatbox-ellipses-outline"}
                        size={24}
                        color={commentFocused ? Colors.BLUE : Colors.BLACK}
                    />
                    <Text style={styles.counter}>1.2K</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={handleSetGift}>
                    <Ionicons
                        name={giftFocused ? "gift" : "gift-outline"}
                        size={24}
                        color={giftFocused ? Colors.YELLOW : Colors.BLACK}
                    />
                    <TouchableOpacity onPress={openTips}><Text style={styles.counter}>32</Text></TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View style={styles.right}>
                <Text>1 day ago</Text>
                <Entypo
                    name="dots-three-horizontal"
                    size={16}
                    color={Colors.BLACK}
                    style={styles.icon}
                />
            </View>
            {giftFocused && (
                <SendTipsModal
                    visible={giftFocused}
                    onClose={() => setGiftFocused(false)}
                />
            )}

        </View>
    )
}

export default BottomBar

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: moderateScale(10)
    },
    left: {
        flexDirection: "row",
        marginTop: verticalScale(10)
    },
    right: {
        marginTop: verticalScale(10),
        marginEnd: moderateScale(10),
        flexDirection: "row"
    },
    iconContainer: {
        flexDirection: "row",
        marginStart: moderateScale(10),
        justifyContent: "center",
        alignItems: "center"
    },
    counter: {
        marginStart: moderateScale(5)
    },
    icon: {
        marginStart: moderateScale(10),
        marginTop: verticalScale(2)
    }
})