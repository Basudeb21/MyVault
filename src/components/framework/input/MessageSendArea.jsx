import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const MessageSendArea = ({ placeholder, value, setValue }) => {
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
                    <MaterialIcons name={"add-photo-alternate"} size={28} color={Colors.THEME} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <Fontisto name={"hipchat"} size={20} color={Colors.THEME} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <MaterialCommunityIcons name={"send-circle"} size={32} color={Colors.THEME} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MessageSendArea

const styles = StyleSheet.create({
    container: {
        marginHorizontal: moderateScale(20),
        backgroundColor: Colors.LIGHT_GRAY,
        borderRadius: 25,
        paddingHorizontal: moderateScale(15),
        paddingVertical: verticalScale(6),
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: verticalScale(10),
        marginTop: verticalScale(10),
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
