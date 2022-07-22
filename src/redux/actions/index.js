import * as actionTypes from '../constants';

export const getPostRequest = () => ({
  type: actionTypes.POSTS_REQUESTED,
});

export const getPostsReceived = (payload) => ({
  type: actionTypes.POSTS_RECEIVED,
  payload,
});

export const getPostsFailed = (error) => ({
  type: actionTypes.POSTS_FAILED,
  error,
});

export const authRequest = (payload) => ({
  type: actionTypes.AUTH_REQUESTED,
  payload,
});

export const authReceived = (payload) => ({
  type: actionTypes.AUTH_RECEIVED,
  payload,
});

export const authFailed = (error) => ({
  type: actionTypes.AUTH_FAILED,
  error,
});

export const authLogout = () => ({
  type: actionTypes.AUTH_LOGOUT,
});
