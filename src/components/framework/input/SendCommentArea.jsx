import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import GradientIcon from '../icon/GradientIcon'

const SendCommentArea = ({ placeholder, value, setValue }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}
                placeholder={placeholder}
                placeholderTextColor={Colors.PLACEHOLDER}
                cursorColor={Colors.BLACK}
                value={value}
                onChangeText={setValue}
                multiline={true}
                scrollEnabled={true}
            />
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.icon}>
                    <GradientIcon
                        name={"send-circle"}
                        size={32}
                        IconPack={MaterialCommunityIcons}
                        colors={[Colors.BUTTON_GRADIENT_ONE, Colors.BUTTON_GRADIENT_TWO]}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SendCommentArea

const styles = StyleSheet.create({
    container: {
        marginHorizontal: moderateScale(14),
        backgroundColor: Colors.LIGHT_GRAY,
        borderRadius: 25,
        paddingHorizontal: moderateScale(15),
        paddingVertical: verticalScale(6),
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: verticalScale(10),
        marginTop: verticalScale(10),
        position: "absolute",
        bottom: 0,
        alignSelf: "center"
    },
    inputBox: {
        flex: 1,
        color: Colors.BLACK,
        maxHeight: verticalScale(120),
        paddingRight: moderateScale(10),
    },
    btnContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginLeft: moderateScale(8),
        paddingBottom: verticalScale(4),
    }
})