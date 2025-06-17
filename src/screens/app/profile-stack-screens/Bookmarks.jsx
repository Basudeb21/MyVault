import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import BackpressTopBar from '../../../components/framework/navbar/BackpressTopBar'
import SearchBar from '../../../components/framework/input/SearchBar'
import UnderMaintainence from '../../../components/project-components/UnderMaintainence'
import { Colors } from '../../../constants'

const Tab = createMaterialTopTabNavigator()

const AllScreen = () => <UnderMaintainence />
const ImageScreen = () => <UnderMaintainence />
const VideoScreen = () => <UnderMaintainence />
const AudioScreen = () => <UnderMaintainence />

const BookmarksTabs = () => {
    const iconSize = 24
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowIcon: true,
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    backgroundColor: Colors.THEME,
                    height: 2,
                },
                tabBarLabelStyle: { fontSize: 10 },
                tabBarIcon: () => {
                    switch (route.name) {
                        case 'All':
                            return <Ionicons name="apps-sharp" size={iconSize} color={Colors.THEME} />
                        case 'Images':
                            return <Fontisto name="photograph" size={iconSize} color={Colors.THEME} />
                        case 'Videos':
                            return <MaterialIcons name="video-collection" size={iconSize} color={Colors.THEME} />
                        case 'Audios':
                            return <Octicons name="unmute" size={iconSize} color={Colors.THEME} />
                        default:
                            return null
                    }
                },
            })}
        >
            <Tab.Screen name="All" component={AllScreen} />
            <Tab.Screen name="Images" component={ImageScreen} />
            <Tab.Screen name="Videos" component={VideoScreen} />
            <Tab.Screen name="Audios" component={AudioScreen} />
        </Tab.Navigator>
    )
}

const Bookmarks = () => {
    return (
        <View style={styles.container}>
            <BackpressTopBar title="Bookmarks" />
            <SearchBar placeholder="Search" />
            <View style={styles.tabContainer}>
                <BookmarksTabs />
            </View>
        </View>
    )
}

export default Bookmarks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    tabContainer: {
        flex: 1,
    }
})
