import React, { memo } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// import AuthModal from '../AuthModal/AuthModal;

import './Header.css';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mars News
          </Typography>
          <Button color="inherit">Sign In</Button>
          {/* <AuthModal name="" /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(Header);
