import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Images } from '../../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const ProfileViewInfoCard = () => {
    return (
        <View>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: Images.CELEBRITY_AVATAR_ONE }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.fanName}>Fans_10</Text>
                    <View style={styles.counterContainer}>
                        <View style={styles.singleArea}>
                            <Text style={styles.counter}>1,200</Text>
                            <Text style={styles.itemName}>Posts</Text>
                        </View>
                        <View style={styles.singleArea}>
                            <Text style={styles.counter}>1.2M</Text>
                            <Text style={styles.itemName}>Followers</Text>
                        </View>
                        <View style={styles.singleArea}>
                            <Text style={styles.counter}>21</Text>
                            <Text style={styles.itemName}>Following</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.stsContainer}>
                <Text style={styles.celebrityStatus}>Celebrity</Text>
                <Text style={styles.myVault}>My Vault Artist</Text>
            </View>
        </View>
    )
}

export default ProfileViewInfoCard

const styles = StyleSheet.create({
    container: {
        marginStart: moderateScale(20),
        marginTop: verticalScale(10),
        flexDirection: "row",
    },
    image: {
        height: verticalScale(50),
        width: moderateScale(50),
        borderRadius: scale(100)
    },
    infoContainer: {
        marginStart: moderateScale(20),
        flex: 1,
    },
    fanName: {
        fontSize: scale(16),
        fontWeight: "600",
        color: Colors.SILVER
    },
    counterContainer: {
        flexDirection: "row",
        flex: 1,
        marginTop: verticalScale(5),
        gap: moderateScale(30)
    },
    singleArea: {

    },
    counter: {
        fontSize: scale(15),
        fontWeight: "600",
        color: Colors.BLACK
    },
    itemName: {
        fontSize: scale(12),
        fontWeight: "600",
        color: Colors.SILVER
    },
    stsContainer: {
        marginStart: moderateScale(30),
        marginTop: verticalScale(10)
    },
    celebrityStatus: {
        fontWeight: "500",
        color: Colors.PLACEHOLDER
    },
    myVault: {
        fontWeight: "400",
    }
})