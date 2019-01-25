import {call, put, takeEvery} from 'redux-saga/effects'
import {delay} from 'redux-saga'
/*import {push} from 'connected-react-router'*/
import * as apiService from '../services/apiService'
import * as Actions from "../actions"

function* fetchEvents(action) {
  const events = yield call(apiService.getEvents)

  yield put({
    type: Actions.FETCH_EVENTS_SUCCEEDED,
    events
  })

  /*
      switch (response.status) {
        case 200:
          yield put({
            type: Actions.TRY_FETCH_EVENTS,
            object: response.events
          })
          break
        default:
          yield put({
            type: Actions.FETCH_EVENTS_FAILED,
            message: "Failed to get events"
          })
      }
  */
}


export default function* mySaga() {
  yield takeEvery(Actions.TRY_FETCH_EVENTS, fetchEvents);
}
