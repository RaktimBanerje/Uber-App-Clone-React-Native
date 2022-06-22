import React from 'react'
import { isEqual } from 'lodash'
import { Marker } from 'react-native-maps'

const MyMarker = ({place, identifier}) => {
    return (
        <Marker
            coordinate={{
                latitude: place.location.latitude,
                longitude: place.location.longitude,
            }}
            title="Origin"
            description={place.description}
            identifier={identifier}
            pinColor="black"
        />
    )
}

const areEqual = (prevProps, nextProps) => { return isEqual(prevProps, nextProps) }   

export default MyMarker