import { POSTS_REQUESTED, POSTS_RECEIVED, POSTS_FAILED } from '../constants';

const initialState = {
  posts: [],
  isFetching: false,
  error: null,
};

const postReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case POSTS_REQUESTED:
      return {
        ...state,
        posts: [],
        error: null,
        isFetching: true,
      };
    case POSTS_RECEIVED:
      return {
        ...state,
        posts: action.payload,
        error: null,
        isFetching: false,
      };
    case POSTS_FAILED:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default postReducer;
