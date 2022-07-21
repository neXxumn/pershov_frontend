import React, { memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import { REGISTRATION, AUTHORIZATION } from '../../../redux/constants';

import AuthModal from '../../AuthModal/AuthModal';

import { toggleModal, authLogout } from '../../../redux/actions';

import defaultUserAvatar from '../../../assets/images/default-user-avatar.svg';
import './AuthBar.css';

function AuthBar() {
  const dispatch = useDispatch();
  const isAccess = useSelector((state) => state.auth.isAccess);
  const modalType = useSelector((state) => state.auth.modalType);

  const isAuthorization = modalType === AUTHORIZATION;

  const handleOpen = (typeOfModal) => {
    dispatch(toggleModal({ isModalOpen: true, modalType: typeOfModal }));
  };

  const handleClose = () => {
    dispatch(toggleModal({ isModalOpen: false, modalType }));
  };

  const logout = async () => {
    await dispatch(authLogout());
  };

  return (
    <div>
      {
        !isAccess
          ? (
            <>
              <Button onClick={() => handleOpen(AUTHORIZATION)}>Sign In</Button>
              <Button onClick={() => handleOpen(REGISTRATION)}>Sign Up</Button>
            </>
          )
          : (
            <div className="logout">
              <div>
                <img src={defaultUserAvatar} className="avatar" alt="user avatar" />
              </div>
              <Button onClick={logout}>Logout</Button>
            </div>
          )
      }
      <AuthModal
        handleClose={handleClose}
        isAccess={isAccess}
        isAuthorization={isAuthorization}
      />
    </div>
  );
}

export default memo(AuthBar);
