import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import ChatBackPressTopBar from '../../../components/framework/navbar/ChatBackPressTopBar';
import { Colors } from '../../../constants';
import ProfileTopCard from '../../../components/framework/card/ProfileTopCard';
import Spacer from '../../../components/framework/boots/Spacer';
import ChatTime from '../../../components/framework/chat/ChatTime';
import ChatSend from '../../../components/framework/chat/ChatSend';
import ChatRecive from '../../../components/framework/chat/ChatRecive';
import MessageSendArea from '../../../components/framework/input/MessageSendArea';
import { verticalScale } from 'react-native-size-matters';

const FriendChatScreen = ({ route }) => {
    const { user } = route.params;
    const [message, setMessage] = useState('');

    return (
        <View style={styles.container}>
            <ChatBackPressTopBar info={user} />
            <View style={styles.chatContainer}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <Spacer height={50} />
                    <ProfileTopCard info={user} />
                    <Spacer height={30} />
                    <ChatTime label={"31 May, 16:20"} />
                    <Spacer height={50} />
                    <ChatSend label={"Hello"} />
                    <ChatSend label={"How are you??"} />
                    <ChatRecive label={"Heyyy"} />
                    <ChatRecive label={"I am fine"} />
                    <ChatRecive label={"How are you??"} />
                    <ChatSend label={"I am also fine"} />
                    <ChatSend label={"Can we go for movie tonight??"} />
                    <ChatRecive label={"Yahh"} />
                    <ChatRecive label={"Sure why not!"} />
                    <ChatRecive label={"That’s what I was thinking actually....."} />
                    <ChatSend label={"Wow nice"} />
                    <ChatSend label={"Thank you so much"} />
                    <ChatRecive label={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem suscipit dignissimos repudiandae saepe error facere, aperiam aut nemo dolore rem maiores magnam consequatur id eveniet corrupti ipsam, fugit itaque! Nemo expedita harum repudiandae tenetur."} />
                    <ChatSend label={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem possimus cum praesentium cumque mollitia, nisi esse quis beatae eaque, dolor, iste architecto saepe non voluptatem nihil tempore nesciunt laborum. Autem neque consequatur voluptatum."} />
                </ScrollView>
            </View>
            <MessageSendArea value={message} setValue={setMessage} placeholder="Type a message..." />
        </View>
    )
};

export default FriendChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    chatContainer: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: verticalScale(20),
    }
});
