import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import RideScreen from '../../screens/RideScreen'

const RideNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Ride" component={RideScreen} />
        </Stack.Navigator>
    )
}

export default RideNavigator
