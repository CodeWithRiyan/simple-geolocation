import * as actions from '../actionTypes/mapsActionTypes'

export interface CoordinatesState {
    coordinates: {
        lat: number
        lng: number
    }
}

const initialState: CoordinatesState = {
    coordinates: {
        lat: -6.2,
        lng: 106.8,
    },
}

export default function coordinatesReducer(
    state: CoordinatesState = initialState,
    action: actions.CoordinatesAction
): CoordinatesState {
    switch (action.type) {
        case actions.GET_COORDINATES_SUCCESS:
            return {
                coordinates: action.coordinates,
            }
        default:
            return state
    }
}
