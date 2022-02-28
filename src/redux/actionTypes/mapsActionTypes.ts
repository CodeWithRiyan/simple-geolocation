import { Suggestion } from 'react-places-autocomplete'

export const GET_COORDINATES = 'mapsActionTypes/GET_COORDINATES'
export interface GetPlacesAction {
    type: typeof GET_COORDINATES
    input: Suggestion | null
}

export const GET_COORDINATES_REQUEST = 'mapsActionTypes/GET_COORDINATES_REQUEST'
export interface GetPlacesRequestAction {
    type: typeof GET_COORDINATES_REQUEST
}

export const GET_COORDINATES_SUCCESS = 'mapsActionTypes/GET_COORDINATES_SUCCESS'
export interface GetCoordinatesSuccessAction {
    type: typeof GET_COORDINATES_SUCCESS
    coordinates: {
        lat: number
        lng: number
    }
}

export const GET_COORDINATES_FAILURE = 'mapsActionTypes/GET_COORDINATES_FAILURE'
export interface GetCoordinatesFailureAction {
    type: typeof GET_COORDINATES_FAILURE
    error: Error | string
}

export type CoordinatesAction =
    | GetPlacesAction
    | GetPlacesRequestAction
    | GetCoordinatesSuccessAction
    | GetCoordinatesFailureAction
