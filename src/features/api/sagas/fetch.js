import {takeEvery} from 'redux-saga/effects'
import apiSaga from 'redux-saga-api-call'

import {API_URL} from '../constants'
import {fetchPeople} from '../actions'

function fetchPeopleCall ({payload: peopleId}) {
  return fetch(API_URL + peopleId)
    .then(response => response.json())
    .then(response => ({response}))
    .catch(error => ({error}))
}

function* fetchPeopleWatcher () {
  yield takeEvery(
    fetchPeople.type,
    apiSaga(fetchPeopleCall)
  )
}

export default [
  fetchPeopleWatcher
]
