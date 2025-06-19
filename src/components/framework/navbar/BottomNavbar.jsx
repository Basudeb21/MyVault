import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors, NavigationStrings } from '../../../constants';
import { ChatPage, CreatePage, HomePage, LivePage, ProfilePage } from '../../../screens/app';



const BottomNavbar = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: styles.navBar,
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >

            <Tab.Screen
                name={NavigationStrings.HOME_SCREEN}
                component={HomePage}
                options={{
                    tabBarLabel: NavigationStrings.HOME_SCREEN,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={24}
                            color={Colors.THEME}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationStrings.CHAT_PAGE}
                component={ChatPage}
                options={{
                    tabBarLabel: NavigationStrings.CHAT_PAGE,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "chatbubble-ellipses-sharp" : "chatbubble-ellipses-outline"}
                            size={24}
                            color={Colors.THEME}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name={NavigationStrings.CREATE_SCREEN}
                component={CreatePage}
                options={{
                    tabBarLabel: NavigationStrings.CREATE_SCREEN,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.addIconContainer}>
                            <Ionicons
                                name={focused ? 'add-circle' : 'add-circle-outline'}
                                size={50}
                                color={Colors.THEME}
                            />
                        </View>
                    ),
                }}
            />


            <Tab.Screen
                name={NavigationStrings.LIVE_SCREEN}
                component={LivePage}
                options={{
                    tabBarLabel: NavigationStrings.LIVE_SCREEN,
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name="live-tv"
                            size={24}
                            color={Colors.THEME}
                        />
                    ),
                }}
            />


            <Tab.Screen
                name={NavigationStrings.PROFILE_SCREEN}
                component={ProfilePage}
                options={{
                    tabBarLabel: NavigationStrings.PROFILE_SCREEN,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name={focused ? "user" : "user-o"}
                            size={24}
                            color={Colors.THEME}
                        />
                    ),
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomNavbar

const styles = StyleSheet.create({

    addIconContainer: {
        width: moderateScale(60),
        height: verticalScale(60),
        borderRadius: scale(35),
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(-30),
        shadowColor: Colors.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        alignSelf: 'center',
    },
})
