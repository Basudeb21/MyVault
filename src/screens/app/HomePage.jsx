import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images, NavigationStrings } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import HomeTopBar from '../../components/framework/navbar/HomeTopBar'
import { StoryHighlightArea, SuggestionArea } from './home-mini-components'
import SharedPost from '../../components/framework/card/SharedPost'
import Spacer from '../../components/framework/boots/Spacer'

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
        <View>
            <HomeTopBar
                searchOnPress={handleSearchPress}
                notificationOnPress={handleNotificationPress}
                walletOnPress={handleWalletPress}
                cartOnPress={handleCartPress}
            />
            <ScrollView>
                <StoryHighlightArea />
                <ScrollView>
                    <SharedPost userAvatar={Images.CELEBRITY_AVATAR_ONE} postImage={Images.POST_ONE} />
                    <SharedPost userAvatar={Images.CELEBRITY_AVATAR_TWO} postImage={Images.POST_TWO} />
                    <SuggestionArea />
                    <SharedPost userAvatar={Images.CELEBRITY_AVATAR_THREE} postImage={Images.POST_THREE} />
                    <SharedPost userAvatar={Images.CELEBRITY_AVATAR_FOUR} postImage={Images.POST_FOUR} />
                    <SharedPost userAvatar={Images.CELEBRITY_AVATAR_FIVE} postImage={Images.POST_FIVE} />
                </ScrollView>
                <Spacer height={150} />
            </ScrollView>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({

    storyHighlightContainer: {
    }
})