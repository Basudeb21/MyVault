import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Images } from '../../../constants'
import SelfStoryHighLight from '../../../components/framework/story/SelfStoryHighLight'
import StoryHighlight from '../../../components/framework/story/StoryHighlight'
import Spacer from '../../../components/framework/boots/Spacer'
import { SafeAreaView } from 'react-native-safe-area-context'

const StoryArea = () => {
    return (
        <SafeAreaView>
            <ScrollView horizontal={true} style={styles.storyHighlightContainer} showsHorizontalScrollIndicator={false}>
                <SelfStoryHighLight image={Images.STORY_SELF} userName={"Your Story"} userImg={Images.USER_IMAGES} />
                <StoryHighlight image={Images.STORY_ONE} userName={"MS Dhoni"} userImage={Images.CELEBRITY_AVATAR_ONE} />
                <StoryHighlight image={Images.STORY_TWO} userName={"Virat Kholi"} userImage={Images.CELEBRITY_AVATAR_TWO} />
                <StoryHighlight image={Images.STORY_THREE} userName={"Suresh Raina"} userImage={Images.CELEBRITY_AVATAR_THREE} />
                <StoryHighlight image={Images.STORY_FOUR} userName={"Rohit Sharma"} userImage={Images.CELEBRITY_AVATAR_FOUR} />
                <StoryHighlight image={Images.STORY_FIVE} userName={"Manish Pandey"} userImage={Images.CELEBRITY_AVATAR_FIVE} />
                <Spacer width={10} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default StoryArea

const styles = StyleSheet.create({})