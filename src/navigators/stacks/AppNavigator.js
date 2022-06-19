import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import RideNavigator from './RideNavigator'
import HomeScreen from '../../screens/HomeScreen'

const AppNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Ride" component={RideNavigator} />
        </Stack.Navigator>
    )
}

export default AppNavigator
