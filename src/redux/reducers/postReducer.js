import { POSTS_REQUESTED, POSTS_RECEIVED, POSTS_FAILED } from '../constants';

const initialState = {
  posts: [],
  isFetching: false,
  errorMessage: null,
};

const postReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case POSTS_REQUESTED:
      return {
        ...state,
        posts: [],
        errorMessage: null,
        isFetching: true,
      };
    case POSTS_RECEIVED:
      return {
        ...state,
        posts: action.payload,
        errorMessage: null,
        isFetching: false,
      };
    case POSTS_FAILED:
      return {
        ...state,
        posts: [],
        errorMessage: action.errorMessage,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default postReducer;
