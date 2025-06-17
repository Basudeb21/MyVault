import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from '../../constants'
import ChatFriendCard from '../../components/framework/card/ChatFriendCard'
// import { ChatFriendCard } from '../../components/framework/card'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import UnderMaintainence from '../../components/project-components/UnderMaintainence';


const CreatePage = () => {
    return (
        <View>
            <UnderMaintainence />

        </View>
    )
}

export default CreatePage

const styles = StyleSheet.create({})