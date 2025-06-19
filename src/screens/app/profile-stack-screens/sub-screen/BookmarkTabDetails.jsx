import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostImage from '../../../../components/framework/iamge/PostImage'
import { useRoute } from '@react-navigation/native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { moderateScale } from 'react-native-size-matters'
import { Colors } from '../../../../constants'

const BookmarkTabDetails = () => {
    const route = useRoute();
    const { bookMarkdata = [] } = route.params || {}
    return (
        <View style={styles.container}>
            <FlatList
                data={bookMarkdata}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={styles.row}
                renderItem={({ item }) => (
                    <PostImage
                        image={item.image}
                        Icon={item.type == "image" ? Fontisto : MaterialIcons}
                        iconName={item.type == "image" ? "photograph" : "video-collection"}
                    />
                )}
                contentContainerStyle={styles.scrollContent}

            />



        </View>
    )
}

export default BookmarkTabDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    row: {
        marginHorizontal: moderateScale(10),
        justifyContent: 'flex-start',
        gap: moderateScale(10),
    }
})