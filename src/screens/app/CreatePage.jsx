import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from '../../constants'
import ChatFriendCard from '../../components/framework/card/ChatFriendCard'
// import { ChatFriendCard } from '../../components/framework/card'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';


const CreatePage = () => {
    return (
        <View>
            <ChatFriendCard image={Images.CELEBRITY_AVATAR_ONE} fanName={"Fans_10"} fanActiveTime={"active 10m ago"} />

        </View>
    )
}

export default CreatePage

const styles = StyleSheet.create({})