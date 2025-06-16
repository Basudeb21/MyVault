import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ChatFriendList } from './chat-stack-screens'
// import { ChatFriendList } from './chat-stack-screens'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';


const ChatPage = () => {
    return (
        <View>
            <ChatFriendList />
        </View>
    )
}

export default ChatPage

const styles = StyleSheet.create({})