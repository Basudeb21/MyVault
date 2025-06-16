import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackpressTopBar } from '../../../components/framework/navbar'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const SearchScreen = () => {
    return (
        <View>
            <BackpressTopBar title={"Search"} />

            <Text>SearchScreen</Text>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})