import {takeEvery} from 'redux-saga/effects'
import apiSaga from 'redux-saga-api-call'

import {API_URL} from '../constants'
import {fetchJoke} from '../actions'

function fetchJokeCall ({payload: jokeId}) {
  return fetch(API_URL + '?id=' + jokeId)
    .then(response => response.json())
    .then(response => ({response}))
    .catch(error => ({error}))
}

function* fetchJokeWatcher () {
  yield takeEvery(
    fetchJoke.type,
    apiSaga(fetchJokeCall)
  )
}

export default [
  fetchJokeWatcher
]
