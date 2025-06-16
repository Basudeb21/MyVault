import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationStrings } from '../constants';
import HomeStack from './HomeStack';
import ChatStack from './ChatStack';
import BottomNavbar from '../components/framework/navbar/BottomNavbar';
// import { BottomNavbar } from '../components/framework/navbar';

const MainStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={NavigationStrings.BOTTOM_NAVBAR}
                component={BottomNavbar}
            />
            <Stack.Screen
                name={NavigationStrings.HOME_STACK}
                component={HomeStack}
            />
            <Stack.Screen
                name={NavigationStrings.CHAT_STACK}
                component={ChatStack}
            />
        </Stack.Navigator>
    );
};

export default MainStack;
