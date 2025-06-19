import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Colors, Images } from '../../../constants'
import SuggestionUserCard from '../../../components/framework/card/SuggestionUserCard'
import Spacer from '../../../components/framework/boots/Spacer'
import { SafeAreaView } from 'react-native-safe-area-context'

const SuggestionArea = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.suggestionTxt}>Suggestions for you</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAllTxt}>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <SuggestionUserCard userImage={Images.CELEBRITY_AVATAR_ONE} />
                <SuggestionUserCard userImage={Images.CELEBRITY_AVATAR_TWO} />
                <SuggestionUserCard userImage={Images.CELEBRITY_AVATAR_THREE} />
                <SuggestionUserCard userImage={Images.CELEBRITY_AVATAR_FOUR} />
                <SuggestionUserCard userImage={Images.CELEBRITY_AVATAR_FIVE} />
                <Spacer width={10} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default SuggestionArea

const styles = StyleSheet.create({
    container: {
        marginTop: verticalScale(40),
    },

    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: moderateScale(20),
        marginBottom: verticalScale(10)
    },
    suggestionTxt: {
        fontSize: scale(14),
        fontWeight: "500"
    },
    seeAllTxt: {
        fontSize: scale(12),
        fontWeight: "500",
        color: Colors.THEME
    }
})