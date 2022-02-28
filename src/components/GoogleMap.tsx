import { GoogleMap, Marker } from 'react-google-maps'

interface MapProps {
    coordinates: {
        lat: number
        lng: number
    }
}

export const GoogleMapComponent = (props: MapProps) => {
    const { coordinates } = props

    return (
        <GoogleMap defaultZoom={8} defaultCenter={coordinates}>
            <Marker position={coordinates} key={1} />
        </GoogleMap>
    )
}
