import React from 'react'
import MapView from 'react-native-maps'
import { Dimensions } from 'react-native'
import MyMapViewDirection from './MyMapViewDirection'
import MyMarker from './MyMarker'
import { isEqual } from 'lodash'

const Map = (props) => {

    const { width, height } = Dimensions.get('window')
    const ASPECT_RATIO = width / height
    const LATITUDE_DELTA = 0.0922
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
    
    const {initialRegion, origin, destination} = props
    const mapRef = React.useRef(null)

    React.useEffect(() => {
        if(!origin.description || !destination.description)
            return 
        else{
            setTimeout(function() {
                mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
                    edgePadding: {
                        right: (width / 20),
                        bottom: (height / 20),
                        left: (width / 20),
                        top: (height / 20),
                    },
                    animated: true
                })
            }, 400)
        }
    })

    return (
        <MapView
            ref={mapRef}
            provider="google"
            style={{
                flex: 1
            }}
            region={{
                latitude: origin.location.latitude || initialRegion.latitude,
                longitude: origin.location.longitude || initialRegion.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }}
            showsMyLocationButton
            showsUserLocation
        >
            {
                origin.description && 
                destination.description && 
                <MyMapViewDirection 
                    origin={origin.location} 
                    destination={destination.location} 
                />
            }
            
            {
                origin.location.latitude && 
                origin.location.longitude && 
                <MyMarker 
                    place={origin}
                    identifier="origin"
                />
            }

            {
                destination.location.latitude && 
                destination.location.longitude && 
                <MyMarker 
                    place={destination}
                    identifier="destination"
                />
            }
        </MapView>
    )
}

const areEqual = (prevProps, nextProps) => {

    let isOriginEqual = isEqual(prevProps.origin, nextProps.origin)
    let isDestinationEqual = isEqual(prevProps.destination, nextProps.destination)

    if(isOriginEqual && isDestinationEqual)
        return true
    else    
        return false
} 

export default React.memo(Map, areEqual)
