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
    const body = payload.authData;
    const { data } = yield call(api.post, endpoint, body);
    const { token } = data;
    setToken(token);
    yield put(authReceived(data));
  } catch (error) {
    const registrationError = error.response.data.validation_errors;
    if (registrationError) {
      yield put(authFailed(registrationError.email));
    } else {
      yield put(authFailed(error.response.data.login));
    }
  }
}

export default function* authUserWatcher() {
  yield takeLatest(actionTypes.AUTH_REQUESTED, authUser);
}
