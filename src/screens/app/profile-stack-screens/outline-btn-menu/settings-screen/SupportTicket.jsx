import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UnderMaintainence from '../../../../../components/project-components/UnderMaintainence'
import BackpressTopBar from '../../../../../components/framework/navbar/BackpressTopBar'

const SupportTicket = () => {
    return (
        <View>
            <BackpressTopBar title={"Support Ticket"} />
            <UnderMaintainence />
        </View>
    )
}

export default SupportTicket

const styles = StyleSheet.create({})