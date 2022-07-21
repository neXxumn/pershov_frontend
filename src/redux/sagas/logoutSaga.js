import { takeEvery, put } from 'redux-saga/effects';

import * as actionTypes from '../constants';
import { authFailed } from '../actions';
import { removeToken } from '../helpers';

function* logoutSaga() {
  try {
    yield removeToken();
  } catch (e) {
    yield put(authFailed(e.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.AUTH_LOGOUT, logoutSaga);
}
