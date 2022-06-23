import React from 'react'

export const initialState = {
    user: {
        name: "Raktim Banerjee"
    },
    initialRegion: {
        latitude: 51.5078788,
        longitude: -0.08773210000000001
    },
    origin: {
        description: undefined,
        location: {
            latitude: undefined,
            longitude: undefined
        }
    },
    destination: {
        description: undefined,
        location: {
            latitude: undefined,
            longitude: undefined
        }
    },
    distance: undefined,
    duration: undefined,
    isProfileScreenOpen: false,
    numberOfMessages: null
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "SET_ORIGIN": {
            console.log("SET_ORIGIN")
            return {
                ...state, 
                origin: {
                    description: action.payload.description,
                    location: {
                        latitude: action.payload.location.lat,
                        longitude: action.payload.location.lng
                    }
                }
            }
        }
        case "SET_DESTINATION": {
            console.log("SET_DESTINATION")
            return {
                ...state,
                destination: {
                    description: action.payload.description,
                    location: {
                        latitude: action.payload.location.lat,
                        longitude: action.payload.location.lng
                    }
                }
            }
        }
        case "SET_TRAVEL_DISTANCE_DURATION": {
            console.log("SET_TRAVEL_DISTANCE_DURATION")
            return {
                ...state,
                distance: action.payload.distance,
                duration: action.payload.duration
            }
        }
        case "PROFILE_SCREEN_OPEN": {
            return {
                ...state,
                isProfileScreenOpen: true
            }
        }
        case "PROFILE_SCREEN_CLOSE": {
            return {
                ...state,
                isProfileScreenOpen: false
            }
        }
        default: {
            return state
        }
    }
}
