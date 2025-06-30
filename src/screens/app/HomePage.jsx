import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Images, NavigationStrings } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import HomeTopBar from '../../components/framework/navbar/HomeTopBar'
import { StoryHighlightArea, SuggestionArea } from './home-mini-components'
import SharedPost from '../../components/framework/card/SharedPost'
import Spacer from '../../components/framework/boots/Spacer'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomePage = () => {
    const navigation = useNavigation();

    const handleSearchPress = () => {
        navigation.navigate(NavigationStrings.HOME_STACK, {
            screen: NavigationStrings.HOME_SEARCH_SCREEN
        })
    }

    const handleNotificationPress = () => {
        navigation.navigate(NavigationStrings.HOME_STACK, {
            screen: NavigationStrings.HOME_NOTIFICATION_SCREEN
        })
    }

    const handleWalletPress = () => {
        navigation.navigate(NavigationStrings.HOME_STACK, {
            screen: NavigationStrings.HOME_WALLET_SCREEN
        })
    }

    const handleCartPress = () => {
        navigation.navigate(NavigationStrings.HOME_STACK, {
            screen: NavigationStrings.HOME_CART_SCREEN
        })
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WHITE }}>
            <HomeTopBar
                searchOnPress={handleSearchPress}
                notificationOnPress={handleNotificationPress}
                walletOnPress={handleWalletPress}
                cartOnPress={handleCartPress}
            />
            <ScrollView>
                <StoryHighlightArea />
                <ScrollView>
                    <SharedPost userAvatar={Images.CELEBRITY_AVATAR_ONE} postImage={Images.POST_ONE} userName={"Fans_5"} />
                    <SharedPost userAvatar={Images.CELEBRITY_AVATAR_TWO} postImage={Images.POST_TWO} userName={"Fans_3"} />
                    <SuggestionArea />
                    <SharedPost userAvatar={Images.CELEBRITY_AVATAR_THREE} postImage={Images.POST_THREE} userName={"Fans_21"} />
                    <SharedPost userAvatar={Images.CELEBRITY_AVATAR_FOUR} postImage={Images.POST_FOUR} userName={"Fans_1"} />
                    <SharedPost userAvatar={Images.CELEBRITY_AVATAR_FIVE} postImage={Images.POST_FIVE} userName={"Fans_6"} />
                </ScrollView>
                <Spacer height={100} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomePage

const styles = StyleSheet.create({

    storyHighlightContainer: {
    }
})