import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationStrings } from '../constants';
import { CartScreen, NotificationScreen, SearchScreen, WalletScreen } from '../screens/app/home-stack-screens';
const HomeStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.HOME_NOTIFICATION_SCREEN} component={NotificationScreen} />
            <Stack.Screen name={NavigationStrings.HOME_SEARCH_SCREEN} component={SearchScreen} />
            <Stack.Screen name={NavigationStrings.HOME_WALLET_SCREEN} component={WalletScreen} />
            <Stack.Screen name={NavigationStrings.HOME_CART_SCREEN} component={CartScreen} />


        </Stack.Navigator>
    );
}

export default HomeStack