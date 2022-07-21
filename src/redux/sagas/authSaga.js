import { call, put, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../constants';
import { authReceived, authFailed } from '../actions';
import api from '../../api/api';
import { setToken } from '../helpers/index';

export function* authUser({ payload }) {
  try {
    const endpoint = payload.authorization
      ? 'authorization'
      : 'registration';
    const { email, name, password } = payload;
    const body = name
      ? { email, name, password }
      : { email, password };
    const { data } = yield call(api.post, endpoint, body);
    const { token } = data;

    if (token) {
      setToken(token);
    }

    yield put(authReceived(data));
  } catch (error) {
    yield put(authFailed(error.message));
  }
}

export default function* authUserWatcher() {
  yield takeLatest(actionTypes.AUTH_REQUESTED, authUser);
}
