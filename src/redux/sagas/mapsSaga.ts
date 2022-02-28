import { put, call, takeEvery, all, fork } from 'redux-saga/effects'
import { fetchPlaces } from '../services/index'
import * as actionCreators from '../actionCreators/mapsActionCreator'
import * as actionTypes from '../actionTypes/mapsActionTypes'

function* onLoadPlaces({ input }: actionTypes.GetPlacesAction) {
    try {
        yield put(actionCreators.getCoordinatesRequest())
        const { data } = yield call(fetchPlaces, input)
        yield put(actionCreators.getCoordinatesSuccess(data))
    } catch (error: any) {
        yield put(actionCreators.getCoordinatesFailure(error))
    }
}

function* watchOnLoadPlaces() {
    yield takeEvery(actionTypes.GET_COORDINATES, onLoadPlaces)
}

export default function* mapsSaga() {
    yield all([fork(watchOnLoadPlaces)])
}
