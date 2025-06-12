import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationStrings } from '../constants';
import { LoginScreen, SignupScreen } from '../screens/auth';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={NavigationStrings.SIGNUP_SCREEN} component={SignupScreen} />

        </Stack.Navigator>
    )
}

export default AuthStack