import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import RideNavigationScreen from '../../screens/RideNavigationScreen'
import RideCarScreen from '../../screens/RideCarScreen'

const RideNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="RideNavigation" component={RideNavigationScreen} />
            <Stack.Screen name="RideCar" component={RideCarScreen} />
            
        </Stack.Navigator>
    )
}

export default RideNavigator
