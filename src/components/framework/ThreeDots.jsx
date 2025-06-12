import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Colors } from '../../constants'
import Spacer from './Spacer'

const ThreeDots = ({ num = 1 }) => {
    return (
        <View style={{ flexDirection: 'row', alignSelf: "center" }}>
            <View style={
                [{
                    borderRadius: "100%",
                    height: verticalScale(9),
                    width: moderateScale(10),
                    borderWidth: scale(1)
                }, {
                    backgroundColor: num >= 1 ? Colors.THEME : Colors.WHITE,
                    borderColor: num >= 1 ? Colors.THEME : Colors.WHITE,
                }]

            } />
            <Spacer width={5} />
            <View style={
                [{
                    borderRadius: "100%",
                    height: verticalScale(9),
                    width: moderateScale(10),
                    borderWidth: scale(1)
                }, {
                    backgroundColor: num >= 2 ? Colors.THEME : Colors.WHITE,
                    borderColor: num <= 2 ? Colors.THEME : Colors.WHITE,
                }]

            } />
            <Spacer width={5} />
            <View style={
                [{
                    borderRadius: "100%",
                    height: verticalScale(9),
                    width: moderateScale(10),
                    borderWidth: scale(1)
                }, {
                    backgroundColor: num >= 3 ? Colors.THEME : Colors.WHITE,
                    borderColor: num <= 3 ? Colors.THEME : Colors.WHITE,
                }]

            } />
        </View>
    )
}

export default ThreeDots

const styles = StyleSheet.create({})