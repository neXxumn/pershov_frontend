import { all } from 'redux-saga/effects';

import postSaga from './postSaga';
import authSaga from './authSaga';
import logoutSaga from './logoutSaga';

export default function* rootSaga() {
  yield all([
    postSaga(),
    authSaga(),
    logoutSaga(),
  ]);
}
