import { takeEvery, put, call } from 'redux-saga/effects';

import * as actionTypes from '../constants';
import api from '../../api/api';
import { getPostsReceived, getPostsFailed } from '../actions';

function* getPostSaga() {
  try {
    const { data } = yield call(api.get, '/news');
    yield put(getPostsReceived(data));
  } catch ({ message }) {
    yield put(getPostsFailed(message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.POSTS_REQUESTED, getPostSaga);
}
