import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { StyleSheet, View } from 'react-native'
import Map from '../components/Map'
import RideBookingNavigator from '../navigators/stacks/RideBookingNavigator'
import { StoreContext } from '../../App'

const RideScreen = () => {

    const {state} = React.useContext(StoreContext)

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        mapContainer: {
            flex: 0.5,
        },
        formContainer: {
            flex: 0.5, 
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mapContainer}>
                <Map {...state} />
            </View>
            <View style={styles.formContainer}>
                <RideBookingNavigator />
            </View>
        </SafeAreaView>
    )
}

export default RideScreen