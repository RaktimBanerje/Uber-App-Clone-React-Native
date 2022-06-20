import React from 'react'
import { StyleSheet, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAP_API_KEY } from "@env"
import { StoreContext } from '../../App'
import { useNavigation } from '@react-navigation/native'

const RideNavigationScreen = () => {

    const navigation = useNavigation()

    const {state, dispatch} = React.useContext(StoreContext)

    const inputStyles = StyleSheet.create({
        container: {
            paddingTop: 20,
            flex: 0
        },
        textInputContainer: {
            marginHorizontal: 22,
            paddingBottom: 0
        },
        textInput: {
            backgroundColor: "#DDDDDDDF",
            borderRadius: 0,
            fontSize: 18
        }
    })

    return (
        <View>
            <GooglePlacesAutocomplete 
                placeholder="Enter pick-up point"
                nearbyPlacesAPI='GooglePlacesSearch'
                fetchDetails={true}
                returnKeyType="search"
                enablePoweredByContainer={false}
                isRowScrollable={true}
                query={{
                    key: GOOGLE_MAP_API_KEY,
                    language: 'en',
                }}
                debounce={400}
                styles={inputStyles}
                onPress={(data, details = null) => {
                    dispatch({
                        type: "SET_ORIGIN",
                        value: {
                            location: details.geometry.location, 
                            description: data.description
                        }
                    })

                    state.destination.description && navigation.navigate("RideCar")
                }}
            />

            <GooglePlacesAutocomplete 
                placeholder="Where to?"
                nearbyPlacesAPI='GooglePlacesSearch'
                fetchDetails={true}
                returnKeyType="search"
                enablePoweredByContainer={false}
                isRowScrollable={true}
                query={{
                    key: GOOGLE_MAP_API_KEY,
                    language: 'en',
                    }}
                debounce={400}
                styles={inputStyles}
                onPress={(data, details = null) => {
                    dispatch({
                        type: "SET_DESTINATION",
                        value: {
                            location: details.geometry.location, 
                            description: data.description
                        }
                    })

                    state.origin.description && navigation.navigate("RideCar")
                }}
            />
        </View>
    )
}

export default RideNavigationScreen