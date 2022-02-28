import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import PlacesAutocomplete, { Suggestion } from 'react-places-autocomplete'
import { useDispatch } from 'react-redux'
import { getCoordinates } from '../redux/actionCreators/mapsActionCreator'

export const InputContainer = () => {
    const [address, setAddress] = React.useState('')
    const dispatch = useDispatch()
    const handleChange = (e: any, value: Suggestion | null) => {
        dispatch(getCoordinates(value))
    }

    return (
        <PlacesAutocomplete value={address} onChange={setAddress}>
            {({ getInputProps, suggestions, loading }) => {
                return (
                    <Autocomplete
                        loading={loading}
                        disablePortal
                        id="combo-box-demo"
                        options={suggestions}
                        getOptionLabel={(suggestions) =>
                            suggestions.description
                        }
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                {...getInputProps({
                                    placeholder: 'Find Place',
                                })}
                            />
                        )}
                        onChange={handleChange}
                    />
                )
            }}
        </PlacesAutocomplete>
    )
}
