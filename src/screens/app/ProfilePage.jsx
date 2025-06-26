import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackpressProfileTopBar from '../../components/framework/navbar/BackpressProfileTopBar'
import ProfileCard from '../../components/framework/card/ProfileCard'
import ProfileSingleMenuCard from '../../components/framework/card/ProfileSingleMenuCard'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'

import Octicons from 'react-native-vector-icons/dist/Octicons'
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6'
import OutlineIconButton from '../../components/framework/button/OutlineIconButton'
import Spacer from '../../components/framework/boots/Spacer'
import OutLineButton from '../../components/framework/button/OutLineButton'
import { useNavigation } from '@react-navigation/native'
import { Colors, NavigationStrings } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfilePage = () => {

    const navigation = useNavigation();
    const onPressEditProfile = () => {
        navigation.navigate(NavigationStrings.PROFILE_STACK, {
            screen: NavigationStrings.PROFILE_EDIT_SCREEN
        })
    }

    const onPressStreams = () => {
        navigation.navigate(NavigationStrings.PROFILE_STACK, {
            screen: NavigationStrings.PROFILE_STREAM_SCREEN
        })
    }

    const onPressOrders = () => {
        navigation.navigate(NavigationStrings.PROFILE_STACK, {
            screen: NavigationStrings.PROFILE_ORDER_SCREEN
        })
    }

    const onPressLists = () => {
        navigation.navigate(NavigationStrings.PROFILE_STACK, {
            screen: NavigationStrings.PROFILE_LISTS_SCREEN
        })
    }

    const onPressSBookmarks = () => {
        navigation.navigate(NavigationStrings.PROFILE_STACK, {
            screen: NavigationStrings.PROFILE_BOOKMARK_SCREEN
        })
    }

    const onPressWallet = () => {
        navigation.navigate(NavigationStrings.HOME_STACK, {
            screen: NavigationStrings.HOME_WALLET_SCREEN
        })
    }

    const onPressSubscription = () => {
        navigation.navigate(NavigationStrings.PROFILE_STACK, {
            screen: NavigationStrings.PROFILE_SUBSCRIPTIONS_SCREEN
        })
    }

    const onPressReferal = () => {
        navigation.navigate(NavigationStrings.PROFILE_STACK, {
            screen: NavigationStrings.PROFILE_REFERALS_SCREEN
        })
    }

    const onPressShop = () => {
        navigation.navigate(NavigationStrings.PROFILE_STACK, {
            screen: NavigationStrings.PROFILE_SHOP_SCREEN
        })
    }

    const onPressEvents = () => {
        navigation.navigate(NavigationStrings.PROFILE_STACK, {
            screen: NavigationStrings.PROFILE_EVENT_SCREEN
        })
    }

    const onPressHelpAndSupport = () => {
        navigation.navigate(NavigationStrings.PROFILE_STACK, {
            screen: NavigationStrings.PROFILE_HELP_AND_SUPPORT_SCREEN
        })
    }

    const onPressSettings = () => {
        navigation.navigate(NavigationStrings.PROFILE_STACK, {
            screen: NavigationStrings.PROFILE_SETTINGS_SCREEN
        })
    }




    const cardData = [
        { id: 1, icon: FontAwesome5, iconName: "user-edit", text: "Edit Profile", onPress: onPressEditProfile },
        { id: 2, icon: MaterialIcons, iconName: "live-tv", text: "Streams", onPress: onPressStreams },
        { id: 3, icon: Entypo, iconName: "shopping-basket", text: "Orders", onPress: onPressOrders },
        { id: 4, icon: FontAwesome, iconName: "list-ul", text: "Lists", onPress: onPressLists },
        { id: 5, icon: FontAwesome, iconName: "bookmark", text: "Bookmarks", onPress: onPressSBookmarks },
        { id: 6, icon: Entypo, iconName: "wallet", text: "Wallet", onPress: onPressWallet },
        { id: 7, icon: Octicons, iconName: "video", text: "Subscriptions", onPress: onPressSubscription },
        { id: 8, icon: FontAwesome6, iconName: "users-line", text: "Referrals", onPress: onPressReferal },
    ]

    const buttonData = [
        { id: 1, icon: Entypo, iconName: "shop", label: "Shop", onPress: onPressShop },
        { id: 2, icon: MaterialIcons, iconName: "event", label: "Events", onPress: onPressEvents },
        { id: 3, icon: MaterialIcons, iconName: "support-agent", label: "Help and Support", onPress: onPressHelpAndSupport },
        { id: 4, icon: Ionicons, iconName: "settings-sharp", label: "Settings", onPress: onPressSettings },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <BackpressProfileTopBar title={"Myprofile_4321"} />
            <ProfileCard />
            <Spacer height={75} />

            <FlatList
                data={cardData}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
                renderItem={({ item }) => (
                    <ProfileSingleMenuCard
                        Icon={item.icon}
                        iconName={item.iconName}
                        text={item.text}
                        onPress={item.onPress}
                        style={styles.card}
                    />
                )}
                contentContainerStyle={styles.contentContainer}
                ListFooterComponent={
                    <>
                        <View style={styles.btnContainer}>
                            {buttonData.map((item) => (
                                <OutlineIconButton
                                    key={item.id}
                                    Icon={item.icon}
                                    iconName={item.iconName}
                                    label={item.label}
                                    onPress={item.onPress}
                                />
                            ))}
                        </View>
                        <Spacer height={20} />
                        <OutLineButton label_two={"Logout"} />
                        <Spacer height={50} />

                    </>
                }
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

export default ProfilePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    contentContainer: {
        paddingHorizontal: moderateScale(16),
        paddingBottom: verticalScale(20),
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: verticalScale(12),
    },
    btnContainer: {
        marginTop: verticalScale(20),
    }
})