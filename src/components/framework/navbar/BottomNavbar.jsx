import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors, Images, NavigationStrings } from '../../../constants';
import { ChatPage, CreatePage, HomePage, LivePage, ProfilePage } from '../../../screens/app';
import GradientIcon from '../icon/GradientIcon';



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
                        <GradientIcon
                            name={focused ? "home" : "home-outline"}
                            size={24}
                            IconPack={Ionicons}
                            colors={[Colors.BUTTON_GRADIENT_ONE, Colors.BUTTON_GRADIENT_TWO]}
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
                        <GradientIcon
                            name={focused ? "chatbubble-ellipses-sharp" : "chatbubble-ellipses-outline"}
                            size={24}
                            IconPack={Ionicons}
                            colors={[Colors.BUTTON_GRADIENT_ONE, Colors.BUTTON_GRADIENT_TWO]}
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
                            <GradientIcon
                                name={focused ? 'add-circle' : 'add-circle-outline'}
                                size={50}
                                IconPack={Ionicons}
                                colors={[Colors.BUTTON_GRADIENT_ONE, Colors.BUTTON_GRADIENT_TWO]}
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
                        <GradientIcon
                            name={"live-tv"}
                            size={24}
                            IconPack={MaterialIcons}
                            colors={[Colors.BUTTON_GRADIENT_ONE, Colors.BUTTON_GRADIENT_TWO]}
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
                        <Image source={{ uri: Images.CELEBRITY_AVATAR_ONE }} style={focused ? styles.active : styles.img} />
                    ),
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomNavbar

const styles = StyleSheet.create({

    addIconContainer: {
        width: moderateScale(56),
        height: verticalScale(50),
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
    img: {
        width: moderateScale(27),
        height: verticalScale(27),
        borderRadius: scale(100),
    },
    active: {
        width: moderateScale(27),
        height: verticalScale(27),
        borderRadius: scale(100),
        borderWidth: scale(2),
        borderColor: Colors.THEME
    }
})
