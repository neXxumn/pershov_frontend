import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import AuthModal from '../../AuthModal/AuthModal';
import defaultUserAvatar from '../../../assets/images/default-user-avatar.svg';

import { REGISTRATION, AUTHORIZATION } from '../../../redux/constants';
import { authLogout } from '../../../redux/actions';

import './AuthBar.css';

function AuthBar() {
  const dispatch = useDispatch();
  const isAccess = useSelector((state) => state.auth.isAccess);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const isAuthorization = modalType === AUTHORIZATION;

  const handleOpen = (typeOfModal) => {
    setIsModalOpen(true);
    setModalType(typeOfModal);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setModalType(modalType);
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
        isModalOpen={isModalOpen}
        isAuthorization={isAuthorization}
      />
    </div>
  );
}

export default memo(AuthBar);
