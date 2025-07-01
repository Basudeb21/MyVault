import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { Colors, NavigationStrings } from '../../../../constants';
import { useNavigation } from '@react-navigation/native';
import SendTipsModal from '../../modal/SendTipsModal';
import GradientIcon from '../../icon/GradientIcon';
import PostThreeDotsModal from '../../modal/PostThreeDotsModal';
import { playSoundEffect } from '../../play-sound/playSoundEffect';


const BottomBar = ({ focused = true }) => {
    const [favoriteFocused, setFavoriteFocused] = useState(false);
    const [commentFocused, setCommentFocused] = useState(false);
    const [giftFocused, setGiftFocused] = useState(false);
    const [threeDotsVisible, setThreeDotsVisible] = useState(false);

    const navigation = useNavigation();

    const handleSetFavorite = () => {
        setFavoriteFocused(!favoriteFocused);
        playSoundEffect({ file: "popsound", extension: "mp3" });
    };


    const openTips = () => {
        navigation.navigate(NavigationStrings.POST_STACK, {
            screen: NavigationStrings.ALL_TIPS,
        });
    };

    const handleSetComment = () => {
        setCommentFocused(!commentFocused);
        navigation.navigate(NavigationStrings.POST_STACK, {
            screen: NavigationStrings.ALL_COMMENTS,
        });
    };

    const handleSetGift = () => {
        setGiftFocused(!giftFocused);
    };

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity style={styles.iconContainer} onPress={handleSetFavorite}>
                    <GradientIcon
                        name={favoriteFocused ? 'favorite' : 'favorite-border'}
                        size={24}
                        IconPack={MaterialIcons}
                        colors={
                            favoriteFocused
                                ? [Colors.BUTTON_GRADIENT_ONE, Colors.BUTTON_GRADIENT_TWO]
                                : [Colors.BLACK, Colors.BLACK]
                        }
                    />
                    <Text style={styles.counter}>50K</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer} onPress={handleSetComment}>
                    <Ionicons name="chatbox-ellipses-outline" size={24} color={Colors.BLACK} />
                    <Text style={styles.counter}>1.2K</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer} onPress={handleSetGift}>
                    <Ionicons
                        name={giftFocused ? 'gift' : 'gift-outline'}
                        size={24}
                        color={giftFocused ? Colors.YELLOW : Colors.BLACK}
                    />
                    <TouchableOpacity onPress={openTips}>
                        <Text style={styles.counter}>32</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

            <View style={styles.right}>
                <Text>1 day ago</Text>
                <TouchableOpacity onPress={() => setThreeDotsVisible(!threeDotsVisible)}>
                    <Entypo
                        name="dots-three-horizontal"
                        size={16}
                        color={Colors.BLACK}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

            {giftFocused && <SendTipsModal visible={giftFocused} onClose={() => setGiftFocused(false)} />}
            <PostThreeDotsModal
                visible={threeDotsVisible}
                onClose={() => setThreeDotsVisible(false)}
            />
        </View>
    );
};

export default BottomBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    left: {
        flexDirection: 'row',
        marginTop: verticalScale(10),
    },
    right: {
        marginTop: verticalScale(10),
        marginEnd: moderateScale(10),
        flexDirection: 'row',
    },
    iconContainer: {
        flexDirection: 'row',
        marginStart: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    counter: {
        marginStart: moderateScale(5),
    },
    icon: {
        marginStart: moderateScale(10),
        marginTop: verticalScale(2),
    },
});
