import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import RideNavigationScreen from '../../screens/RideNavigationScreen'
import RideOptionScreen from '../../screens/RideOptionScreen'

const RideNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="RideNavigation" component={RideNavigationScreen} />
            <Stack.Screen name="RideOption" component={RideOptionScreen} />
            
        </Stack.Navigator>
    )
}

export default RideNavigator
