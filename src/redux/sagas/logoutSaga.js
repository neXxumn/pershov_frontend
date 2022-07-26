import { takeLatest, put } from 'redux-saga/effects';

import * as actionTypes from '../constants';
import { authFailed } from '../actions';
import { removeToken } from '../helpers';

function* logoutSaga() {
  try {
    yield removeToken();
  } catch (error) {
    yield put(authFailed(error));
  }
}

export default function* watcherSaga() {
  yield takeLatest(actionTypes.AUTH_LOGOUT, logoutSaga);
}
