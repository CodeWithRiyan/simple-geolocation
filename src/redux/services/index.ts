import {
    Suggestion,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete'

export async function fetchPlaces(input: Suggestion | null) {
    const placeId = input?.placeId!
    const data = await geocodeByPlaceId(placeId).then((results) =>
        getLatLng(results[0])
    )
    return { data }
}
