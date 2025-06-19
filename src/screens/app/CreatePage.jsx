import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from '../../constants'
import ChatFriendCard from '../../components/framework/card/ChatFriendCard'
// import { ChatFriendCard } from '../../components/framework/card'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import UnderMaintainence from '../../components/project-components/UnderMaintainence';
import { SafeAreaView } from 'react-native-safe-area-context';


const CreatePage = () => {
    return (
        <SafeAreaView>
            <UnderMaintainence />

        </SafeAreaView>
    )
}

export default CreatePage

const styles = StyleSheet.create({})