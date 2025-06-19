import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationStrings } from '../constants';
import EditProfile from '../screens/app/profile-stack-screens/EditProfile';
import Streams from '../screens/app/profile-stack-screens/Streams';
import Orders from '../screens/app/profile-stack-screens/Orders';
import Lists from '../screens/app/profile-stack-screens/Lists';
import Bookmarks from '../screens/app/profile-stack-screens/Bookmarks';
import Wallet from '../screens/app/profile-stack-screens/Wallet';
import Subscriptions from '../screens/app/profile-stack-screens/Subscriptions';
import Referals from '../screens/app/profile-stack-screens/Referals';
import ViewOrder from '../screens/app/profile-stack-screens/sub-screen/ViewOrder';
import ViewListContent from '../screens/app/profile-stack-screens/sub-screen/ViewListContent';
const ProfileStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.PROFILE_EDIT_SCREEN} component={EditProfile} />
            <Stack.Screen name={NavigationStrings.PROFILE_STREAM_SCREEN} component={Streams} />
            <Stack.Screen name={NavigationStrings.PROFILE_ORDER_SCREEN} component={Orders} />
            <Stack.Screen name={NavigationStrings.PROFILE_LISTS_SCREEN} component={Lists} />
            <Stack.Screen name={NavigationStrings.PROFILE_BOOKMARK_SCREEN} component={Bookmarks} />
            <Stack.Screen name={NavigationStrings.PROFILE_WALLET_SCREEN} component={Wallet} />
            <Stack.Screen name={NavigationStrings.PROFILE_SUBSCRIPTIONS_SCREEN} component={Subscriptions} />
            <Stack.Screen name={NavigationStrings.PROFILE_REFERALS_SCREEN} component={Referals} />
            <Stack.Screen name={NavigationStrings.VIEW_ORDER} component={ViewOrder} />
            <Stack.Screen name={NavigationStrings.HOME_VIEW_LIST_CONTENT} component={ViewListContent} />

        </Stack.Navigator>
    );
}

export default ProfileStack