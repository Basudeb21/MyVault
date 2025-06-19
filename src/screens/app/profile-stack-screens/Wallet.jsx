import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UnderMaintainence from '../../../components/project-components/UnderMaintainence'
import { SafeAreaView } from 'react-native-safe-area-context'

const Wallet = () => {
    return (
        <SafeAreaView>
            <UnderMaintainence />
        </SafeAreaView>
    )
}

export default Wallet

const styles = StyleSheet.create({})