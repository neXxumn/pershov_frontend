import React, { memo } from 'react';

import { useDispatch } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { REGISTRATION, AUTHORIZATION } from '../../redux/constants';

import AuthModal from '../AuthModal/AuthModal';

import { toggleModal } from '../../redux/actions';

import './Header.css';

function Header() {
  const dispatch = useDispatch();

  const handleOpen = (typeOfModal) => {
    dispatch(toggleModal({ isModalOpen: true, modalType: typeOfModal }));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="mui-relative">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mars News
          </Typography>
          <Button onClick={() => handleOpen(AUTHORIZATION)}>Sign In</Button>
          <Button onClick={() => handleOpen(REGISTRATION)}>Sign Up</Button>
          <AuthModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(Header);
