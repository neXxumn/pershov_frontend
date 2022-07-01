import * as actionTypes from '../constants';

export const getPostRequest = () => ({
  type: actionTypes.POSTS_REQUESTED,
});

export const getPostsReceived = (payload) => ({
  type: actionTypes.POSTS_RECEIVED,
  payload,
});

export const getPostsFailed = (errorMessage) => ({
  type: actionTypes.POSTS_FAILED,
  errorMessage,
});
