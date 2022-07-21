import {
  AUTH_REQUESTED,
  AUTH_RECEIVED,
  AUTH_FAILED,
  AUTH_LOGOUT,
  TOGGLE_MODAL,
} from '../constants';

import { getToken } from '../helpers/index';

const initialState = {
  isAccess: Boolean(getToken()),
  authUserData: null,
  isLoading: false,
  modalType: '',
  isModalOpen: false,
  error: null,
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTH_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isAccess: false,
        error: null,
      };
    case AUTH_RECEIVED:
      return {
        ...state,
        isLoading: false,
        isAccess: true,
        authUserData: action.payload,
        error: null,
      };
    case AUTH_FAILED:
      return {
        ...state,
        isLoading: false,
        isAccess: false,
        error: action.error,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        isAccess: false,
        authUserData: null,
        error: null,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: action.payload.isModalOpen,
        modalType: action.payload.modalType,
      };
    default:
      return state;
  }
};

export default authReducer;
