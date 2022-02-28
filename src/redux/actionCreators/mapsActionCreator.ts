import * as actions from '../actionTypes/mapsActionTypes'
import { Suggestion } from 'react-places-autocomplete'
import { AxiosError } from 'axios'

export function getCoordinates(
    input: Suggestion | null
): actions.GetCoordinatesAction {
    return {
        type: actions.GET_COORDINATES,
        input,
    }
}

export function getCoordinatesRequest(): actions.GetCoordinatesRequestAction {
    return {
        type: actions.GET_COORDINATES_REQUEST,
    }
}

export function getCoordinatesSuccess(coordinates: {
    lat: number
    lng: number
}): actions.GetCoordinatesSuccessAction {
    return {
        type: actions.GET_COORDINATES_SUCCESS,
        coordinates,
    }
}

export function getCoordinatesFailure(
    error: Error | string | AxiosError
): actions.GetCoordinatesFailureAction {
    return {
        type: actions.GET_COORDINATES_FAILURE,
        error,
    }
}
