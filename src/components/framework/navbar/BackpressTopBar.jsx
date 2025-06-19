import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../constants';

const BackpressTopBar = ({ title }) => {

    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.sideContainer}>
                <TouchableOpacity onPress={handleBackPress}>
                    <Ionicons
                        name="arrow-back-outline"
                        size={24}
                        color={Colors.BLACK}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.centerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.sideContainer} />
        </View>
    )
}

export default BackpressTopBar;

const styles = StyleSheet.create({
    container: {
        height: verticalScale(60),
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: moderateScale(16),
    },
    sideContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    centerContainer: {
        flex: 2,
        justifyContent: 'center',
    },
    title: {
        color: Colors.BLACK,
        fontSize: scale(22),
        fontWeight: "500",
        position: "absolute",
        left: -35
    },

})