import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UnderMaintainence from '../../components/project-components/UnderMaintainence'
import { SafeAreaView } from 'react-native-safe-area-context'

const LivePage = () => {
    return (
        <SafeAreaView>
            <UnderMaintainence />

        </SafeAreaView>
    )
}

export default LivePage

const styles = StyleSheet.create({})