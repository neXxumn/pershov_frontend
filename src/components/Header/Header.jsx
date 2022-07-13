import React, { memo } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { REGISTRATION, AUTHORIZATION } from '../../redux/constants';

import AuthModal from '../AuthModal/AuthModal';

import './Header.css';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="mui-relative">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mars News
          </Typography>
          <AuthModal modalType={REGISTRATION} name="Sign In" />
          <AuthModal modalType={AUTHORIZATION} name="Sign Up" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(Header);
