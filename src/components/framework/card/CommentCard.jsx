import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Images } from '../../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const CommentCard = ({ image, userName, comment, time }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.rightContent}>
                <View style={styles.commentContainer}>
                    <Text style={styles.userName}>{userName}</Text>
                    <Text style={styles.comment}>{comment}</Text>
                </View>
                <View style={styles.lowerContainer}>
                    <Text style={styles.time}>{time}</Text>
                    <TouchableOpacity>
                        <Text style={styles.replyTxt}>Reply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CommentCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    image: {
        width: moderateScale(45),
        height: verticalScale(45),
        borderRadius: scale(100),
        marginTop: verticalScale(4),
    },
    rightContent: {
        flexShrink: 1,
        flex: 1,
    },
    commentContainer: {
        marginStart: moderateScale(10),
        backgroundColor: Colors.LIGHT_GRAY,
        padding: scale(10),
        borderRadius: scale(10),
        maxWidth: '85%',
    },
    userName: {
        fontSize: scale(15),
        fontWeight: '600',
    },
    comment: {
        fontSize: scale(13),
        fontWeight: '400',
    },
    lowerContainer: {
        flexDirection: 'row',
        marginStart: moderateScale(20),
        gap: scale(10),
    },
    time: {},
    replyTxt: {},
})
