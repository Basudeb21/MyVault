import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="BottomTabs" component={BottomNavbar} />
            <Stack.Screen name={NavigationStrings.ROOM_DETAILS_STACK} component={RoomDetailsStack} /> */}

        </Stack.Navigator>
    )
}

export default MainStack