import {call, put, takeEvery} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {push} from 'connected-react-router'
import  * as apiService from '../services/apiService'
import * as Actions from "../actions"

/*
function* sampleSaga(action) {
    yield put({
      type: ACTION_TYPE
    })
}

*/



function* tryLogin(action){
  try{
    yield call(delay, 5000)
      const response = yield call(apiService.login, action.credentials)

      switch (response.status){
        case 200:
          yield put ({
            type: Actions.SUCCESSFUL_LOGIN

          })
          break
          default: 
            yield put ({
              type: Actions.FAILED_LOGIN,
              errorMsg: 'Unknown status'
            })
      }

  } catch(e){
    yield put ({
      type: Actions.FAILED_LOGIN,
      errorMsg: 'Error during login: ' + e.message
    })
  }
}



export default function* mySaga() {
    yield takeEvery(Actions.TRY_LOGIN, tryLogin);
}