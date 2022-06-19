import React from 'react'

export const initialState = {
    user: {},
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
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "UPDATE_ORIGIN": {
            state.origin.location.latitude = action.value.location.lat
            state.origin.location.longitude = action.value.location.lng
            state.origin.description = action.value.description
            
            console.log(state)
            return state
        }
        case "UPDATE_DESTINATION": {
            state.destination.location.latitude = action.value.location.lat
            state.destination.location.longitude = action.value.location.lng
            state.destination.description = action.value.description

            console.log(state)
            return state
        }
        default: {
            console.log(state)
            return state
        }
    }
}