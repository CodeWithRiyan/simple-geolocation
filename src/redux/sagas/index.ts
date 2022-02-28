import { all, fork } from 'redux-saga/effects'
import MapsSaga from './mapsSaga'

export default function* rootSaga() {
    yield all([fork(MapsSaga)])
}
