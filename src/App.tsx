import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'

// local import
import { MapContainer, InputContainer } from './containers'
import configureStore from './redux/config'

import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap } from 'react-google-maps'

const theme = createTheme()

const App = () => {
    const store = configureStore()
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid item xs={12} sm={6}>
                        <MapContainer />
                    </Grid>
                    <Grid item xs={12} sm={6} component={Paper}>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <RoomOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Simple Geolocation
                            </Typography>
                            <InputContainer />
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Provider>
    )
}

const WrappedApp = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(App)

export default WrappedApp
