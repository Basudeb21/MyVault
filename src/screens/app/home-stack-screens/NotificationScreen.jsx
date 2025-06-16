import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from '../../../constants'
// import { BackpressTopBar } from '../../../components/framework/navbar'
// import { NotificationCard } from '../../../components/framework/card'
// import { Spacer } from '../../../components/framework/boots'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import NotificationCard from '../../../components/framework/card/NotificationCard'
import BackpressTopBar from '../../../components/framework/navbar/BackpressTopBar';
import Spacer from '../../../components/framework/boots/Spacer';


const NotificationScreen = () => {
    return (
        <View>
            <BackpressTopBar title={"Notifications"} />
            <ScrollView>
                <NotificationCard
                    userImage={Images.CELEBRITY_AVATAR_ONE}
                    userName={"Fans_10"}
                    notification={"started following you and invited you to join the broadcast channels."}
                    time={"1 min ago"}
                />
                <NotificationCard
                    userImage={Images.CELEBRITY_AVATAR_TWO}
                    userName={"Fans_20"}
                    notification={"started following you."}
                    time={"1 min ago"}
                />
                <NotificationCard
                    userImage={Images.CELEBRITY_AVATAR_THREE}
                    userName={"Fans_17"}
                    notification={"your live streaming is about to end in 30 minutes. You can start another one afterwards."}
                    time={"1 min ago"}
                />
                <NotificationCard
                    userImage={Images.CELEBRITY_AVATAR_FOUR}
                    userName={"Fans_11"}
                    notification={"liked your photo."}
                    time={"1 min ago"}
                />
                <NotificationCard
                    userImage={Images.USER_IMAGES}
                    userName={"Fans_21"}
                    notification={"started following you and invited you to join the broadcast channels."}
                    time={"1 min ago"}
                />

                <NotificationCard
                    userImage={Images.CELEBRITY_AVATAR_ONE}
                    userName={"Fans_10"}
                    notification={"started following you and invited you to join the broadcast channels."}
                    time={"1 min ago"}
                />
                <NotificationCard
                    userImage={Images.CELEBRITY_AVATAR_TWO}
                    userName={"Fans_20"}
                    notification={"started following you."}
                    time={"1 min ago"}
                />
                <NotificationCard
                    userImage={Images.CELEBRITY_AVATAR_THREE}
                    userName={"Fans_17"}
                    notification={"your live streaming is about to end in 30 minutes. You can start another one afterwards."}
                    time={"1 min ago"}
                />
                <NotificationCard
                    userImage={Images.CELEBRITY_AVATAR_FOUR}
                    userName={"Fans_11"}
                    notification={"liked your photo."}
                    time={"1 min ago"}
                />
                <NotificationCard
                    userImage={Images.USER_IMAGES}
                    userName={"Fans_21"}
                    notification={"started following you and invited you to join the broadcast channels."}
                    time={"1 min ago"}
                />


                <Spacer height={70} />

            </ScrollView>
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({})