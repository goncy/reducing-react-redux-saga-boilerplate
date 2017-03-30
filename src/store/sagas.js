import {fork} from 'redux-saga/effects'

import api from '../features/api'

function startSagas (...sagas) {
  return function * rootSaga () {
    yield sagas.map(saga => saga.map(fork))
  }
}

export default startSagas(
  ...api.sagas
)
