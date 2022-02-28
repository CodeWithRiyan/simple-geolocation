import { combineReducers } from 'redux'
import mapsReducer from './mapsReducer'
import isLoadingReducer from './isLoadingReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({
    maps: mapsReducer,
    isLoading: isLoadingReducer,
    error: errorReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
