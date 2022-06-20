import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { StoreContext } from '../../App'
import { GOOGLE_MAP_API_KEY } from "@env"
import { Dimensions } from 'react-native'

const Map = () => {

    const { width, height } = Dimensions.get('window')
    const ASPECT_RATIO = width / height
    const LATITUDE_DELTA = 0.0922
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

    const {state, dispatch} = React.useContext(StoreContext)
    const {initialRegion, origin, destination} = state
    const mapRef = React.useRef(null)

    const convertMinsToHrsMins = (mins) => {
        let h = Math.floor(mins / 60);
        let m = mins % 60;
        h = h < 10 ? '0' + h : h; // (or alternatively) h = String(h).padStart(2, '0')
        m = m < 10 ? '0' + m : m; // (or alternatively) m = String(m).padStart(2, '0')
        return `${h}:${m}`;
      }

    const handleRoutingReady = (result) => {
        
        dispatch({
            type: "SET_TRAVEL_DISTANCE_DURATION",
            value: {
                distance: Number(result.distance).toFixed(2),
                duration: convertMinsToHrsMins(parseInt(result.duration))
            }
        })
        // console.log(`Distance: ${result.distance} km`)
        // console.log(`Duration: ${result.duration} min.`)
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
            edgePadding: {
                right: (width / 20),
                bottom: (height / 20),
                left: (width / 20),
                top: (height / 20),
            },
            animated: true
        })
    }

    const MyMapViewDirection = () => {
        return (
            <MapViewDirections 
                origin={origin.location}
                destination={destination.location}
                apikey={GOOGLE_MAP_API_KEY}
                strokeWidth={4}
                strokeColor="black"
                onReady={handleRoutingReady}
            />
        )
    }
    
    const Origin = () => {
        return (
            <Marker
                coordinate={{
                    latitude: origin.location.latitude,
                    longitude: origin.location.longitude,
                }}
                title="Origin"
                description={origin.description}
                identifier="origin"
                pinColor="black"
            />
        )
    }

    const Destination = () => {
        return (
            <Marker
                coordinate={{
                    latitude: destination.location.latitude,
                    longitude: destination.location.longitude,
                }}
                title="Destination"
                description={destination.description}
                identifier="destination"
                pinColor="black"
            />
        )
    }

    return (
        <MapView
            ref={mapRef}
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
            // showsTraffic
            showsUserLocation
        >
            {
                origin.description && 
                destination.description && 
                <MyMapViewDirection />
            }
            
            {
                origin.location.latitude && 
                origin.location.longitude && 
                <Origin />
            }

            {
                destination.location.latitude && 
                destination.location.longitude && 
                <Destination />
            }
            
        </MapView>
    )
}

export default Map