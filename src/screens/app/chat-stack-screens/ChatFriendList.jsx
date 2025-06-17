import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Images, NavigationStrings } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import BackPressTopbarWithIcon from '../../../components/framework/navbar/BackPressTopbarWithIcon';
import ChatFriendCard from '../../../components/framework/card/ChatFriendCard';
import Spacer from '../../../components/framework/boots/Spacer';
import SearchBar from '../../../components/framework/input/SearchBar';
// import { BackPressTopbarWithIcon } from '../../../components/framework/navbar';
// import { ChatFriendCard } from '../../../components/framework/card';
// import { SearchBar } from '../../../components/framework/micro';
// import { Spacer } from '../../../components/framework/boots';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const ChatFriendList = () => {
    const users = [
        { id: 1, image: Images.CELEBRITY_AVATAR_ONE, fanName: "Fans_10", fanActiveTime: "active 10m ago" },
        { id: 2, image: Images.CELEBRITY_AVATAR_TWO, fanName: "Fans_12", fanActiveTime: "active 1m ago" },
        { id: 3, image: Images.CELEBRITY_AVATAR_THREE, fanName: "Fans_18", fanActiveTime: "active 10d ago" },
        { id: 4, image: Images.CELEBRITY_AVATAR_FOUR, fanName: "Fans_21", fanActiveTime: "active 25m ago" },
        { id: 5, image: Images.CELEBRITY_AVATAR_FIVE, fanName: "Fans_65", fanActiveTime: "active 4s ago" },
        { id: 6, image: Images.CELEBRITY_AVATAR_ONE, fanName: "Fans_11", fanActiveTime: "active 50s ago" },
        { id: 7, image: Images.CELEBRITY_AVATAR_TWO, fanName: "Fans_1", fanActiveTime: "active 1d ago" },
        { id: 8, image: Images.CELEBRITY_AVATAR_THREE, fanName: "Fans_7", fanActiveTime: "active 12m ago" },
        { id: 9, image: Images.CELEBRITY_AVATAR_FOUR, fanName: "Fans_74", fanActiveTime: "active 10m ago" },
        { id: 10, image: Images.CELEBRITY_AVATAR_FIVE, fanName: "Fans_89", fanActiveTime: "active 10m ago" },
        { id: 12, image: Images.CELEBRITY_AVATAR_ONE, fanName: "Fans_69", fanActiveTime: "active 11m ago" },
        { id: 13, image: Images.CELEBRITY_AVATAR_TWO, fanName: "Fans_45", fanActiveTime: "active 14m ago" },


    ]

    const [searchTxt, setSearchTxt] = useState("");
    const navigation = useNavigation();
    const onPressChatClick = (user) => {
        navigation.navigate(NavigationStrings.CHAT_STACK, {
            screen: NavigationStrings.FRIEND_CHAT_SCREEN,
            params: { user }
        })
    }


    return (
        <View style={styles.container}>
            <BackPressTopbarWithIcon title={"Myprofile_4321"} />
            <SearchBar value={searchTxt} setValue={setSearchTxt} placeholder={"Search"} />
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ChatFriendCard
                        image={item.image}
                        fanName={item.fanName}
                        fanActiveTime={item.fanActiveTime}
                        onPress={() => onPressChatClick(item)}
                    />
                )}
                ListFooterComponent={<Spacer height={230} />}
                contentContainerStyle={styles.scrollContent}
            />
        </View>
    );
};

export default ChatFriendList;

const styles = StyleSheet.create({

});