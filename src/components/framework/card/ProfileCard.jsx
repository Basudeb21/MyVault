import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Images } from '../../../constants'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import GradientTextButton from '../button/GradientTextButton'

const ProfileCard = () => {
    return (
        <View style={styles.card}>
            <View style={styles.rowOne}>
                <View>
                    <TouchableOpacity style={styles.userImgContainer}>
                        <Image source={{ uri: Images.CELEBRITY_AVATAR_FIVE }} style={styles.userImg} />
                        <TouchableOpacity style={styles.storyAddBtn}>
                            <Ionicons
                                name={'add-circle'}
                                size={25}
                                color={Colors.THEME}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
                <View style={styles.userNameContainer}>
                    <Text style={styles.userName}>Fans_Test</Text>
                    <Text style={styles.userID}>@u987654321</Text>

                </View>
                <View style={styles.btnContainer}>
                    <GradientTextButton label='View Profile' fontSize={10} width='150%' height={20} />
                </View>
            </View>
            <View style={styles.rowTwo}>
                <View style={styles.counterContainer}>
                    <Text style={styles.counter}>1,200</Text>
                    <Text style={styles.counterName}>Posts</Text>
                </View>
                <View style={styles.counterContainer}>
                    <Text style={styles.counter}>240K</Text>
                    <Text style={styles.counterName}>Followers</Text>
                </View>
                <View style={styles.counterContainer}>
                    <Text style={styles.counter}>93</Text>
                    <Text style={styles.counterName}>Following</Text>
                </View>

            </View>
        </View>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    card: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: Colors.WHITE,
        borderRadius: scale(15),
        elevation: scale(5),
        position: "absolute",
        top: 60
    },
    rowOne: {
        flexDirection: "row"
    },
    rowTwo: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: 'center',
        marginTop: verticalScale(15),
        marginBottom: verticalScale(20)

    },
    userImgContainer: {
        marginVertical: verticalScale(10),
        borderRadius: scale(100),
        height: verticalScale(48),
        width: moderateScale(48),
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginStart: moderateScale(30)
    },
    btnContainer: {
        alignSelf: "center",
        marginStart: moderateScale(30)
    },

    userImg: {
        height: verticalScale(50),
        width: moderateScale(50),
        borderRadius: scale(100),

    },
    storyAddBtn: {
        position: "absolute",
        backgroundColor: Colors.WHITE,
        borderRadius: scale(100),
        top: 30,
        right: -5
    },
    userNameContainer: {
        marginStart: moderateScale(15),
        alignSelf: "center"
    },
    userName: {
        fontSize: scale(20),
        fontWeight: "400",
    },
    userID: {
        fontSize: scale(10),
        color: Colors.PLACEHOLDER
    },
    counterContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    counter: {
        fontSize: scale(16),
        fontWeight: "500",
        alignSelf: "center"
    },
    counterName: {
        fontSize: scale(10),
        fontWeight: "400",
        alignSelf: "center"
    }

})