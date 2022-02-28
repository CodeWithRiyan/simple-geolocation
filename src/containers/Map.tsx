import { withGoogleMap } from 'react-google-maps'
import { useSelector } from 'react-redux'
import { GoogleMapComponent } from '../components/GoogleMap'
import { AppState } from '../redux/reducers/index'

export const MapContainer = () => {
    const { coordinates } = useSelector((state: AppState) => state.maps)

    const GoogleMapWrapped = withGoogleMap((props) => (
        <GoogleMapComponent coordinates={coordinates} />
    ))

    return (
        <GoogleMapWrapped
            containerElement={<div style={{ height: `100%`, width: '100%' }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    )
}
