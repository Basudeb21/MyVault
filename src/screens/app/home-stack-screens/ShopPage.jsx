import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import BackpressTopBar from '../../../components/framework/navbar/BackpressTopBar'
import { Colors, Images, NavigationStrings } from '../../../constants'
import SearchBar from '../../../components/framework/input/SearchBar'
import ShopItemCard from '../../../components/framework/card/ShopItemCard'
import Spacer from '../../../components/framework/boots/Spacer'
import { scale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ShopPage = () => {
    const shopItems = [
        {
            id: 1,
            image: Images.PRODUCT_ONE,
            itemName: "Laptop",
            desc: "High-performance laptop with sleek design and powerful hardware.",
            price: "$999"
        },
        {
            id: 2,
            image: Images.PRODUCT_TWO,
            itemName: "Shoe",
            desc: "A comfortable shoe with brand value.",
            price: "$199"
        },
        {
            id: 3,
            image: Images.PRODUCT_FOUR,
            itemName: "Smartphone",
            desc: "Latest-gen smartphone with stunning display and high-speed processor.",
            price: "$799"
        },
        {
            id: 4,
            image: Images.PRODUCT_THREE,
            itemName: "Smartwatch",
            desc: "Stylish smartwatch with health tracking and notification alerts.",
            price: "$149"
        },
        {
            id: 5,
            image: Images.PRODUCT_FIVE,
            itemName: "Gaming Console",
            desc: "Next-gen gaming console with immersive graphics and fast loading.",
            price: "$499"
        },
        {
            id: 6,
            image: Images.PRODUCT_SIX,
            itemName: "Bluetooth Speaker",
            desc: "Portable speaker with powerful sound and waterproof design.",
            price: "$89"
        },
        {
            id: 7,
            image: Images.PRODUCT_SEVEN,
            itemName: "Backpack",
            desc: "Durable and spacious backpack perfect for travel and school.",
            price: "$59"
        },
        {
            id: 8,
            image: Images.PRODUCT_EIGHT,
            itemName: "Camera",
            desc: "DSLR camera with 24MP resolution and multiple lens options.",
            price: "$699"
        },
        {
            id: 9,
            image: Images.PRODUCT_NINE,
            itemName: "Tablet",
            desc: "Lightweight tablet with 10-inch screen and long battery life.",
            price: "$329"
        },
        {
            id: 10,
            image: Images.PRODUCT_TEN,
            itemName: "Fitness Band",
            desc: "Track your steps, heart rate, and sleep with this smart band.",
            price: "$49"
        }
    ];
    const navigation = useNavigation();
    const onImagePress = () => {
        navigation.navigate(NavigationStrings.HOME_SHOP_ITEM_INFO_PAGE)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WHITE }}>
            <BackpressTopBar title={"Shop"} />
            <SearchBar placeholder={"Search"} />
            <View>
                <FlatList
                    data={shopItems}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ShopItemCard
                            image={item.image}
                            productName={item.itemName}
                            desc={item.desc}
                            price={item.price}
                            onPress={onImagePress}
                        />
                    )}
                    ListFooterComponent={<Spacer height={130} />}
                    contentContainerStyle={styles.scrollContent}
                />
            </View>
        </SafeAreaView>
    )
}

export default ShopPage

const styles = StyleSheet.create({
    row: {
        marginBottom: verticalScale(12),
        justifyContent: "center",
        gap: scale(10)
    },
})