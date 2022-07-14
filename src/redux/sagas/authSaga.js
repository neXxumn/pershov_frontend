import { call, put, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../constants';
import { authReceived, authFailed } from '../actions';
import api from '../../api/api';

export function* authUser({ payload }) {
  try {
    // eslint-disable-next-line no-debugger
    debugger;
    const endpoint = payload.modalType === 'login' ? 'login' : 'registration';
    const { data } = yield call(api.post, endpoint, payload);
    const { token } = data;

    localStorage.setItem('token', JSON.stringify(token));

    yield put(authReceived(data));
  } catch (error) {
    yield put(authFailed(error.message));
  }
}

export function* authUserWatcher() {
  yield takeLatest(actionTypes.AUTH_REQUESTED, authUser);
}
